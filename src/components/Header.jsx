import React from "react";
import { Link } from 'react-router'; // Import Link for routing

function Header() {
  return (
    <header className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold hover:text-gray-400">
          JOSep-<span className="text-lime-500 hover:text-gray-400">[Shop]</span>
        </h1>
        <nav>
          <ul className="flex space-x-20">
            <li><Link to="/" className="hover:text-gray-400 border border-yellow px-2">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-400 border border-yellow px-2">Products</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 border border-yellow px-2">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 border border-yellow px-2">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
