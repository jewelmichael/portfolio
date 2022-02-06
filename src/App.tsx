import React from 'react';
import './Assets/Styles/style.scss';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Layout from './Component/Layout/PageLayout/Layout';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Work from './Pages/Works/Work';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
