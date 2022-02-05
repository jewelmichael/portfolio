import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from '../../../Pages/About/About';
import Contact from '../../../Pages/Contact/Contact';
import Home from '../../../Pages/Home/Home';
import Work from '../../../Pages/Works/Work';
import Header from '../Header/Header';

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;
