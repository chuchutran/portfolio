import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          {/* Resume Page */}
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
