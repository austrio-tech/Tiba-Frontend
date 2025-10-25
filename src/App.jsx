import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DownloadProfile from './pages/DownloadProfile';
import Careers from './pages/CareersPage';
import Gallery from './pages/GalleryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<DownloadProfile />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
