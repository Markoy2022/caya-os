import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import FCFS from './components/FCFS'; // <-- import FCFS component

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/fcfs" element={<FCFS />} /> {/* <-- add FCFS route */}
      </Routes>
    </Router>
  );
}

export default App;
