import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/SkillsPage';
import Experience from './pages/Experience';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactMe';
import Navbar from './components/ui/Navigation';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <Router>
      <Navbar /> {/* shows on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
