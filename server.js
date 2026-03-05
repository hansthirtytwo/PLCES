/**
 * PLCES Server — server.js
 * Express + WebSocket + JSON file storage (no native addons, works on any Node version)
 * Run:  node server.js
 * Dev:  npm run dev
 */

const express             = require('express');
const http                = require('http');
const path                = require('path');
const fs                  = require('fs');
const { WebSocketServer } = require('ws');

const PORT     = process.env.PORT || 3000;
const DIR      = __dirname;
const DB_FILE  = path.join(DIR, 'plces_data.json');
const LOG_FILE = path.join(DIR, 'plces_log.json');

// ── JSON file helpers ────────────────────────────────
function readData() {
  try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
  catch(e) { return null; }
}

function writeData(obj) {
  obj._updated_at = new Date().toISOString();
  fs.writeFileSync(DB_FILE, JSON.stringify(obj, null, 2), 'utf8');
}

function readLog() {
  try { return JSON.parse(fs.readFileSync(LOG_FILE, 'utf8')); }
  catch(e) { return []; }
}

function appendLog(entry) {
  const log = readLog();
  log.unshift({ ...entry, created_at: new Date().toISOString() });
  fs.writeFileSync(LOG_FILE, JSON.stringify(log.slice(0, 200), null, 2), 'utf8');
}

// ── Seed from plces.js if DB file doesn't exist ──────
function seedFromFile() {
  if (fs.existsSync(DB_FILE)) {
    console.log('✓ Loaded existing data from plces_data.json');
    return;
  }
  try {
    let src = fs.readFileSync(path.join(DIR, 'plces.js'), 'utf8');
    // Strip block comments
    src = src.replace(/\/\*[\s\S]*?\*\//g, '');
    // Strip line comments
    src = src.replace(/^\s*\/\/.*$/gm, '');
    // Strip the window.PLCES = assignment wrapper
    src = src.replace(/window\.PLCES\s*=\s*/, '');
    // Strip trailing semicolon
    src = src.replace(/;\s*$/, '').trim();
    const data = JSON.parse(src);
    writeData(data);
    console.log('✓ Seeded plces_data.json from plces.js');
  } catch(e) {
    console.warn('⚠  Could not auto-seed from plces.js:', e.message);
    console.warn('   Fix plces.js or POST JSON to /api/data');
    writeData({});
  }
}

seedFromFile();

// ── Express ──────────────────────────────────────────
const app    = express();
const server = http.createServer(app);
app.use(express.json({ limit: '5mb' }));
app.use(express.static(DIR));

// ── WebSocket ─────────────────────────────────────────
const wss     = new WebSocketServer({ server, path: '/ws' });
const clients = new Set();

wss.on('connection', function(ws) {
  clients.add(ws);
  // Send full current data to new client so it can update midMap etc.
  try {
    const d = readData();
    if (d) ws.send(JSON.stringify({ type: 'data_update', data: d }));
  } catch(e) {}
  ws.on('close', () => clients.delete(ws));
  ws.on('error', () => clients.delete(ws));
});

function broadcast(msg) {
  const payload = JSON.stringify(msg);
  clients.forEach(c => { if (c.readyState === 1) c.send(payload); });
}

// ── REST API ──────────────────────────────────────────

// GET full data
app.get('/api/data', (req, res) => {
  const d = readData();
  res.json({ data: d || {}, updated_at: d?._updated_at || null });
});

// POST replace entire dataset
app.post('/api/data', (req, res) => {
  const { data } = req.body;
  if (!data) return res.status(400).json({ error: 'data required' });
  writeData(data);
  broadcast({ type: 'data_update', data });
  res.json({ ok: true });
});

// POST update a single game's score row by MID
// Body: { mid: "001", row_idx: 0, score_a: 24, score_b: 18 }
app.post('/api/scores', (req, res) => {
  const { mid, row_idx, score_a, score_b } = req.body;
  if (mid == null || row_idx == null) {
    return res.status(400).json({ error: 'mid and row_idx are required' });
  }

  const plces = readData();
  if (!plces) return res.status(500).json({ error: 'no data loaded' });

  let found = false;
  Object.values(plces).forEach(ev => {
    if (!ev || !ev.days) return;
    ev.days.forEach(day => {
      (day.games || []).forEach(g => {
        if (String(g.mid) === String(mid)) {
          if (!Array.isArray(g.scoring)) g.scoring = [];
          if (!g.scoring[row_idx]) g.scoring[row_idx] = {};
          g.scoring[row_idx].scoreA = parseInt(score_a, 10) || 0;
          g.scoring[row_idx].scoreB = parseInt(score_b, 10) || 0;
          found = true;
        }
      });
    });
  });

  if (!found) return res.status(404).json({ error: `MID "${mid}" not found` });

  writeData(plces);
  appendLog({ mid, row_idx, score_a, score_b });

  // Broadcast targeted patch (fast modal update) + full data refresh
  broadcast({ type: 'score_update', mid, row_idx,
    score_a: parseInt(score_a, 10) || 0,
    score_b: parseInt(score_b, 10) || 0 });

  res.json({ ok: true });
});

// GET last 50 score changes
app.get('/api/log', (req, res) => {
  res.json(readLog().slice(0, 50));
});

// Admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(DIR, 'admin.html'));
});

// ── Start ─────────────────────────────────────────────
server.listen(PORT, () => {
  console.log(`\n  PLCES running at  http://localhost:${PORT}`);
  console.log(`  Admin panel at    http://localhost:${PORT}/admin`);
  console.log(`  WebSocket at      ws://localhost:${PORT}/ws`);
  console.log(`  Data file:        ${DB_FILE}\n`);
});