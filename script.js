// ═══════════════════════════════════════════════════
//  PLCES script.js
//  Reads window.PLCES from plces.js and renders all pages.
//  Pages detected by which container exists in the DOM:
//    #event-list  → index.html
//    #day-list    → intramurals.html
//    #schedule    → schedule.html
// ═══════════════════════════════════════════════════


// ─── TITLE FITTER ────────────────────────────────────
function fitToTwoLines(el, minPx, maxPx) {
  minPx = minPx || 12; maxPx = maxPx || 72;
  var computed = window.getComputedStyle(el);
  el.style.fontFamily = computed.fontFamily || '';
  var lineHeight = parseFloat(computed.lineHeight) || parseFloat(computed.fontSize) * 1.15;
  var maxHeight  = lineHeight * 2 + 0.5;
  var lo = minPx, hi = maxPx, best = minPx;
  var parentWidth = el.clientWidth;
  while (lo <= hi) {
    var mid = Math.floor((lo + hi) / 2);
    el.style.fontSize = mid + 'px';
    if (el.scrollHeight <= maxHeight && el.scrollWidth <= parentWidth + 1) {
      best = mid; lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  el.style.fontSize = best + 'px';
}

function applyFit(el) {
  el.style.fontSize = '';
  fitToTwoLines(el);
}

function initTitles(root) {
  var scope = root || document;
  scope.querySelectorAll('.title').forEach(function(el) {
    applyFit(el);
    var ro = new ResizeObserver(function() { applyFit(el); });
    ro.observe(el);
    if (el.parentElement) ro.observe(el.parentElement);
  });
}

function initLogo() {
  var logo = document.getElementById('logo');
  if (!logo) return;
  logo.style.cursor = 'pointer';
  logo.addEventListener('click', function() {
    window.history.back();
  });
}


// ─── HELPERS ─────────────────────────────────────────
function up(str) { return (str || '').toUpperCase(); }
function baseLabel(base) {
  return base === 'grade' ? 'GRADE BASED' : 'HOUSE BASED';
}
function getParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

var ARROW_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';


// ─── EVENT LIST (index.html #event-list) ─────────────
function renderEventList() {
  var container = document.getElementById('event-list');
  if (!container || !window.PLCES) return;

  Object.entries(window.PLCES).forEach(function(entry) {
    var id = entry[0], ev = entry[1];

    var a = document.createElement('a');
    a.className = 'event';
    a.href = id + '.html';

    var h1 = document.createElement('h1');
    h1.className = 'title';
    h1.textContent = up(ev.name);

    var bottom = document.createElement('div');
    bottom.className = 'bottom';

    var base = document.createElement('div');
    base.className = 'base';
    base.innerHTML = '<b>' + baseLabel(ev.base) + '</b><p>' + ev.days.length + ' DAYS</p>';

    var dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    if (ev.enddate) {
      dateDiv.innerHTML = '<p>' + ev.startdate + '</p>' + ARROW_SVG + '<p>' + ev.enddate + '</p>';
    } else {
      dateDiv.innerHTML = '<p>' + ev.startdate + '</p>';
    }

    bottom.appendChild(base);
    bottom.appendChild(dateDiv);
    a.appendChild(h1);
    a.appendChild(bottom);
    container.appendChild(a);
  });

  initTitles();
}


// ─── DAY LIST (intramurals.html #day-list) ───────────
function renderDayList() {
  var container = document.getElementById('day-list');
  if (!container || !window.PLCES) return;

  var eventId = container.dataset.event || 'intramurals';
  var ev = window.PLCES[eventId];
  if (!ev) return;

  document.title = 'PLCES: ' + up(ev.name);

  ev.days.forEach(function(day, i) {
    var a = document.createElement('a');
    a.className = 'day';
    a.href = 'schedule.html?event=' + eventId + '&day=' + i;

    var h1 = document.createElement('h1');
    h1.className = 'title';
    h1.textContent = up(day.name);

    // Mini-schedule
    var center = document.createElement('div');
    center.className = 'center';
    var gamesDiv = document.createElement('div');
    gamesDiv.className = 'games';

    var prevTime = null;
    day.games.forEach(function(g) {
      var row = document.createElement('div');
      if (g.isBreak) {
        row.id = 'brk';
        row.innerHTML = '<b>' + up(g.name) + '</b><p>' + g.time + '</p>';
      } else {
        var label = up(g.name) + (g.modifier ? ' ' + up(g.modifier) + '.' : '');
        if (prevTime === g.time) {
          row.innerHTML = '<b id="sim"> ' + label + '</b><p>' + g.time + '</p>';
        } else {
          row.innerHTML = '<b>' + label + '</b><p>' + g.time + '</p>';
        }
      }
      prevTime = g.time;
      gamesDiv.appendChild(row);
    });

    center.appendChild(gamesDiv);

    var bottom = document.createElement('div');
    bottom.className = 'bottom';
    bottom.innerHTML =
      '<div class="base"><b>' + up(day.date) + '</b></div>' +
      '<div class="date"><p>et. ' + day.starttime + '</p>' +
      '<p style="padding:0 8px">-></p>' +
      '<p>' + day.endtime + '</p></div>';

    a.appendChild(h1);
    a.appendChild(center);
    a.appendChild(bottom);
    container.appendChild(a);
  });

  initTitles();
}


// ─── SCHEDULE (schedule.html #schedule) ──────────────
function renderSchedule() {
  var container = document.getElementById('schedule');
  if (!container || !window.PLCES) return;

  var p = getParams();
  var eventId = p.event || 'intramurals';
  var dayIdx  = parseInt(p.day || '0', 10);
  var ev      = window.PLCES[eventId];
  var day     = ev && ev.days[dayIdx];
  if (!day) return;

  document.title = 'PLCES: ' + up(ev.name) + ' \u2013 ' + up(day.name);

  // Group games by time → same-time games share a .set (side by side)
  var groups = [];
  var timeMap = new Map();
  day.games.forEach(function(g) {
    if (!timeMap.has(g.time)) {
      var group = { time: g.time, games: [] };
      timeMap.set(g.time, group);
      groups.push(group);
    }
    timeMap.get(g.time).games.push(g);
  });

  groups.forEach(function(group) {
    var set = document.createElement('div');
    set.className = 'set';

    group.games.forEach(function(g) {
      if (g.isBreak) {
        var div = document.createElement('div');
        div.className = 'bet break-item';
        div.innerHTML =
          '<h1 class="title">' + up(g.name) + '</h1>' +
          '<div class="bottom"><div class="date"><b>' + g.time + '</b></div></div>';
        set.appendChild(div);
        return;
      }

      var a = document.createElement('a');
      a.className = 'bet';
      a.href = '#';
      // Embed all game data for the modal
      a.dataset.game = JSON.stringify({
        name:       g.name,
        modifier:   g.modifier || '',
        time:       g.time,
        delegates:  g.delegates || [],
        scores:     !!g.scores,
        scorestype: g.scorestype || '',
        mid:        g.mid || '',
        scoring:    g.scoring || []
      });

      var h1 = document.createElement('h1');
      h1.className = 'title';
      h1.textContent = up(g.name);

      var bottom = document.createElement('div');
      bottom.className = 'bottom';

      var timeDiv = document.createElement('div');
      timeDiv.className = 'date';
      timeDiv.innerHTML = '<b>' + g.time + '</b>';
      bottom.appendChild(timeDiv);

      if (g.modifier) {
        var mod = document.createElement('div');
        mod.className = 'modifier';
        mod.innerHTML = '<p>' + up(g.modifier) + '</p>';
        bottom.appendChild(mod);
      }

      a.appendChild(h1);
      a.appendChild(bottom);
      set.appendChild(a);
    });

    container.appendChild(set);
  });

  initTitles();
  initModal();
}


// ─── MODAL ───────────────────────────────────────────
function initModal() {
  var modal = document.getElementById('game-modal');
  if (!modal) return;

  function openModal(game) {
    modal.querySelector('.modal-title').textContent    = up(game.name);
    modal.querySelector('.modal-subtitle').textContent = up(game.modifier);
    modal.querySelector('.modal-est-time').textContent = game.time;
    modal.querySelector('.modal-delegates-names').textContent =
      game.delegates.length ? game.delegates.join(', ') : 'TBA';

    var body = modal.querySelector('.modal-body');
    body.innerHTML = '';

    if (game.scores) {
      if (game.scorestype === 'versus') {
        buildVersus(body, game.scoring, game.mid);
      } else if (game.scorestype === 'roundrobin') {
        buildRoundRobin(body, game.mid);
      }
    }

    modal._token   = (modal._token || 0) + 1;
    modal._openMid = game.mid || '';          // track for live patch
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal.classList.contains('open')) return;
    var content   = modal.querySelector('.modal-content');
    var tokenSnap = modal._token;
    modal.classList.remove('open');

    function cleanup() {
      if (modal._token !== tokenSnap) return;
      modal.setAttribute('aria-hidden', 'true');
      modal.querySelector('.modal-body').innerHTML = '';
    }

    var onEnd = function(ev) {
      if (ev.target !== content) return;
      content.removeEventListener('transitionend', onEnd);
      cleanup();
    };
    content.addEventListener('transitionend', onEnd);
    setTimeout(cleanup, 420);
  }

  modal.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('modal-backdrop') ||
        ev.target.closest('[data-action="close"]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(ev) {
    if (ev.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.bet[data-game]').forEach(function(el) {
    el.addEventListener('click', function(ev) {
      ev.preventDefault();
      try {
        openModal(JSON.parse(el.dataset.game));
      } catch(e) { console.error('PLCES: bad game data', e); }
    });
  });
}


// ─── VERSUS: static 2×2 score grid ──────────────────
// scoring = [{teamA, scoreA, teamB, scoreB}, ...]
// Each entry → one row in the grid. Winner cell = yellow, loser = gray.
function buildVersus(container, scoring, mid) {
  if (!scoring || scoring.length === 0) return;

  var wrap = document.createElement('div');
  wrap.className = 'vs-wrap';

  var grid = document.createElement('div');
  grid.className = 'vs-grid';
  grid.style.gridTemplateRows = 'repeat(' + scoring.length + ', 1fr)';

  scoring.forEach(function(match) {
    var aWins = match.scoreA > match.scoreB;
    var bWins = match.scoreB > match.scoreA;

    var cellA = document.createElement('div');
    cellA.className = 'vs-cell' + (aWins ? ' winner' : '');
    cellA.innerHTML =
      '<div class="vs-cell-name">' + up(match.teamA) + '</div>' +
      '<div class="vs-cell-score">' + match.scoreA   + '</div>';

    var cellB = document.createElement('div');
    cellB.className = 'vs-cell' + (bWins ? ' winner' : '');
    cellB.innerHTML =
      '<div class="vs-cell-name">' + up(match.teamB) + '</div>' +
      '<div class="vs-cell-score">' + match.scoreB   + '</div>';

    grid.appendChild(cellA);
    grid.appendChild(cellB);
  });

  // "vs" labels, one per row, absolutely positioned at row center
  scoring.forEach(function(_, i) {
    var label = document.createElement('div');
    label.className = 'vs-row-label';
    label.textContent = 'vs';
    label.style.top = ((2 * i + 1) / (2 * scoring.length) * 100) + '%';
    grid.appendChild(label);
  });

  wrap.appendChild(grid);

  if (mid) {
    var footer = document.createElement('div');
    footer.className = 'vs-footer';
    footer.textContent = 'MID: ' + mid;
    wrap.appendChild(footer);
  }

  container.appendChild(wrap);
}


// ─── ROUND ROBIN: interactive 2-panel picker ─────────
// Each panel = 2×2 clickable quadrant buttons.
// Gray (default) → orange (selected) → yellow (champion).
function buildRoundRobin(container, mid) {
  if (!container || container.querySelector('.rr-container')) return;

  var QUADS = [
    { color: 'BLUE',  pos: 'tl', score: 5 },
    { color: 'GREEN', pos: 'tr', score: 4 },
    { color: 'RED',   pos: 'bl', score: 3 },
    { color: 'BLACK', pos: 'br', score: 1 }
  ];
  var GRAY   = '#c8c8c8';
  var ORANGE = '#FF6A2A';
  var YELLOW = '#FFD400';
  var DARK   = 'rgba(0,0,0,0.65)';
  var LITE   = 'rgba(255,255,255,0.9)';

  var rr = document.createElement('div');
  rr.className = 'rr-container';

  var row = document.createElement('div');
  row.className = 'rr-row';

  var selections = [null, null];
  var quadEls    = [[], []];
  var scoreNums  = [null, null];

  function style(btn, bg, color) {
    btn.style.background = bg;
    btn.style.color = color;
  }

  function createPanel(idx) {
    var panel = document.createElement('div');
    panel.className = 'rr-panel';

    QUADS.forEach(function(q) {
      var btn = document.createElement('button');
      btn.className = 'rr-quad';
      btn.dataset.color = q.color;
      btn.dataset.pos   = q.pos;
      btn.textContent   = q.color;
      style(btn, GRAY, LITE);

      btn.addEventListener('click', function() {
        quadEls[idx].forEach(function(b) {
          b.classList.remove('champion');
          style(b, GRAY, LITE);
        });
        style(btn, ORANGE, LITE);
        selections[idx] = q;
        updateDisplay();
      });

      panel.appendChild(btn);
      quadEls[idx].push(btn);
    });

    var overlay = document.createElement('div');
    overlay.className = 'rr-score-overlay';
    var num = document.createElement('div');
    num.className = 'rr-score-num';
    overlay.appendChild(num);
    panel.appendChild(overlay);
    scoreNums[idx] = num;

    return panel;
  }

  var vsCol = document.createElement('div');
  vsCol.className = 'rr-vs-col';
  vsCol.innerHTML = '<div class="rr-vs-text">VS</div>';

  row.appendChild(createPanel(0));
  row.appendChild(vsCol);
  row.appendChild(createPanel(1));
  rr.appendChild(row);

  var footer = document.createElement('div');
  footer.className = 'rr-footer';
  footer.textContent = 'MID: ' + (mid || '\u2014');
  rr.appendChild(footer);

  container.appendChild(rr);

  function updateDisplay() {
    var a = selections[0];
    var b = selections[1];

    scoreNums.forEach(function(n) { n.classList.remove('visible'); });
    if (!a || !b) return;

    scoreNums[0].textContent = a.score;
    scoreNums[1].textContent = b.score;
    scoreNums[0].classList.add('visible');
    scoreNums[1].classList.add('visible');

    // Reset all quads to their default color
    quadEls.flat().forEach(function(btn) {
      btn.classList.remove('champion');
      var pIdx = quadEls[0].includes(btn) ? 0 : 1;
      var sel  = selections[pIdx];
      style(btn,
        (sel && sel.color === btn.dataset.color) ? ORANGE : GRAY,
        LITE
      );
    });

    // Crown the winner
    if (a.score !== b.score) {
      var wIdx   = a.score > b.score ? 0 : 1;
      var wColor = selections[wIdx].color;
      var wBtn   = quadEls[wIdx].find(function(b) { return b.dataset.color === wColor; });
      if (wBtn) {
        wBtn.classList.add('champion');
        style(wBtn, YELLOW, DARK);
      }
    }
  }
}


// ─── WATERMARK ───────────────────────────────────────────
function initWatermark() {
  var img = document.createElement('img');
  img.src = 'creator.png';
  img.alt = '';
  img.className = 'creator-watermark';
  document.body.appendChild(img);
}

// ─── LIVE WEBSOCKET UPDATES ──────────────────────────────
// Connects to /ws and patches open modals + schedule cards in real time.
// Falls back silently when running as static files (no server).
function initLiveUpdates() {
  if (location.protocol === 'file:') return;
  try {
    var proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    var ws    = new WebSocket(proto + '//' + location.host + '/ws');

    ws.onmessage = function(ev) {
      try {
        var msg = JSON.parse(ev.data);
        if (msg.type === 'score_update') handleScoreUpdate(msg);
        if (msg.type === 'data_update' && msg.data) {
          window.PLCES = msg.data;
          // Rebuild midMap for MID search on data updates
          if (window._midSearchRebuild) window._midSearchRebuild();
        }
      } catch(e) {}
    };

    ws.onclose  = function() { setTimeout(initLiveUpdates, 4000); };
    ws.onerror  = function() {};
  } catch(e) {}
}

// Patch an open versus modal's cells live when a score_update arrives
function handleScoreUpdate(msg) {
  var modal = document.getElementById('game-modal');
  if (!modal || !modal.classList.contains('open')) return;
  if (!modal._openMid || String(modal._openMid) !== String(msg.mid)) return;

  var cells = modal.querySelectorAll('.vs-cell');
  var idxA  = msg.row_idx * 2;
  var idxB  = msg.row_idx * 2 + 1;
  if (!cells[idxA] || !cells[idxB]) return;

  cells[idxA].querySelector('.vs-cell-score').textContent = msg.score_a;
  cells[idxB].querySelector('.vs-cell-score').textContent = msg.score_b;
  cells[idxA].classList.toggle('winner', msg.score_a > msg.score_b);
  cells[idxB].classList.toggle('winner', msg.score_b > msg.score_a);

  // Flash the updated cells
  [cells[idxA], cells[idxB]].forEach(function(c) {
    c.style.transition = 'none';
    c.style.outline = '3px solid rgba(255,106,42,0.7)';
    setTimeout(function() {
      c.style.transition = '';
      c.style.outline = '';
    }, 600);
  });

  // Also add a live dot to schedule cards for this MID
  document.querySelectorAll('.bet[data-game]').forEach(function(el) {
    try {
      var g = JSON.parse(el.dataset.game);
      if (String(g.mid) === String(msg.mid)) pulseLiveDot(el);
    } catch(e) {}
  });
}

// ─── LIVE DOT PULSE (schedule cards) ─────────────────────
function pulseLiveDot(card) {
  var dot = card.querySelector('.live-dot');
  if (!dot) {
    dot = document.createElement('div');
    dot.className = 'live-dot';
    card.appendChild(dot);
  }
  dot.classList.remove('pulse');
  // Force reflow then re-add
  void dot.offsetWidth;
  dot.classList.add('pulse');
}


// ─── BOOT ────────────────────────────────────────────────
function boot() {
  initLogo();
  initWatermark();
  if (document.getElementById('event-list')) renderEventList();
  if (document.getElementById('day-list'))   renderDayList();
  if (document.getElementById('schedule'))   renderSchedule();
  initLiveUpdates();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}


// ─── MID SEARCH ──────────────────────────────────────
function initMidSearch() {
  // Inject the input at the bottom of body
  var wrap = document.createElement('div');
  wrap.className = 'mid-search-wrap';

  var input = document.createElement('input');
  input.type = 'text';
  input.className = 'mid-search-input';
  input.placeholder = 'MID Enter';
  input.maxLength = 20;
  wrap.appendChild(input);
  document.body.appendChild(wrap);

  // Collect all games from PLCES data indexed by MID
  var midMap = {};
  if (window.PLCES) {
    Object.values(window.PLCES).forEach(function(ev) {
      (ev.days || []).forEach(function(day) {
        (day.games || []).forEach(function(g) {
          if (g.mid) midMap[String(g.mid).trim()] = { game: g, day: day, ev: ev };
        });
      });
    });
  }

  // Expose rebuild so WebSocket data_update can refresh the map
  window._midSearchRebuild = function() {
    midMap = {};
    if (window.PLCES) {
      Object.values(window.PLCES).forEach(function(ev) {
        (ev.days || []).forEach(function(day) {
          (day.games || []).forEach(function(g) {
            if (g.mid) midMap[String(g.mid).trim()] = { game: g, day: day, ev: ev };
          });
        });
      });
    }
  };

  var invalidTimer = null;

  input.addEventListener('keydown', function(ev) {
    if (ev.key !== 'Enter') return;
    var val = input.value.trim();
    if (!val) return;

    var match = midMap[val];

    if (!match) {
      // Flash red, clear after 1s
      input.classList.add('invalid');
      clearTimeout(invalidTimer);
      invalidTimer = setTimeout(function() {
        input.classList.remove('invalid');
        input.value = '';
      }, 1000);
      return;
    }

    input.value = '';
    input.classList.remove('invalid');

    // Open modal if on schedule page, otherwise navigate there
    var modal = document.getElementById('game-modal');
    if (modal) {
      // We're on schedule.html — open directly
      openMidModal(match.game);
    } else {
      // Navigate to schedule page with mid param
      var p = getParams();
      var eventId = p.event || 'intramurals';
      // Find day index
      var ev = window.PLCES[eventId] || Object.values(window.PLCES)[0];
      var dayIdx = 0;
      ev.days.forEach(function(d, i) {
        d.games.forEach(function(g) { if (g.mid === val) dayIdx = i; });
      });
      window.location.href = 'schedule.html?event=' + eventId + '&day=' + dayIdx + '&mid=' + encodeURIComponent(val);
    }
  });

  // Auto-open MID from URL param on schedule page
  var urlMid = getParams().mid;
  if (urlMid && document.getElementById('game-modal')) {
    var match = midMap[urlMid];
    if (match) {
      // Wait for schedule to render first
      setTimeout(function() { openMidModal(match.game); }, 80);
    }
  }

  function openMidModal(game) {
    var modal = document.getElementById('game-modal');
    if (!modal) return;
    modal.querySelector('.modal-title').textContent    = up(game.name);
    modal.querySelector('.modal-subtitle').textContent = up(game.modifier || '');
    modal.querySelector('.modal-est-time').textContent = game.time;
    modal.querySelector('.modal-delegates-names').textContent =
      (game.delegates || []).length ? game.delegates.join(', ') : 'TBA';

    var body = modal.querySelector('.modal-body');
    body.innerHTML = '';

    if (game.scores) {
      if (game.scorestype === 'versus') buildVersus(body, game.scoring, game.mid);
      else if (game.scorestype === 'roundrobin') buildRoundRobin(body, game.mid);
    }

    modal._token = (modal._token || 0) + 1;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
}

// Run MID search init on boot (appended to existing boot)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMidSearch);
} else {
  initMidSearch();
}