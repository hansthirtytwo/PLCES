import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Day1 from './pages/intramurals/254/Day1';
import Day2 from './pages/intramurals/254/Day2';
import Exp from './pages/intramurals/254/Experimental';
import Day4 from './pages/intramurals/254/Day4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intramurals/25/day1" element={<Day1 />} />
        <Route path="/intramurals/25/day2" element={<Day2 />} />
        <Route path="/intramurals/25/day4" element={<Day4 />} />
        <Route path="/alpha" element={<Exp />} />
      </Routes>
    </Router>
  );
}

export default App;