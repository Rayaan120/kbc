import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Clients from './pages/Clients';

import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';  // ✅ import it

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ this makes it work on route change */}
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
         
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
