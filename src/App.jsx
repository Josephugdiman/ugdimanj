import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import Products from './pages/Products'; // Assuming you have Products page
import About from './pages/about';
import Contact from './pages/contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
