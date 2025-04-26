import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Day1 from './pages/intramurals/254/Day1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intramurals/254" element={<Day1 />} />
      </Routes>
    </Router>
  );
}

export default App;