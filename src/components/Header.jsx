import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <img src="/logo1.png" alt="Besa Zeqiri" className="w-12 h-12 rounded-full object-cover border-2 border-white" />

        <div className="hidden md:flex items-center space-x-8 text-white ml-10">
           <nav className="flex space-x-8">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="#skills" className="hover:text-gray-300 transition">Skills</a>
        </nav>    
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md transition whitespace-nowrap ml-auto">
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none p-2 ml-auto" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-gray-900 px-6 py-6 space-y-3 text-white z-40 shadow-md">
          <a href="#home" className="block hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="block hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" className="block hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition text-center" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
