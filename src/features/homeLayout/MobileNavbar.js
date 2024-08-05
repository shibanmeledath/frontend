import React, { useState } from 'react';

import { Link } from 'react-router-dom';
const MobileNavbar= () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="fixed top-4 right-4 z-50 text-white hover:text-green-400 sm:hidden focus:outline-none transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className='text-4xl '>&times;</span> // Close icon
        ) : (
          <span className='text-3xl'>&#9776;</span> // Hamburger icon
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-4 py-6">
          <h2 className="text-lg font-bold mb-4">CORFOC</h2>
          <nav>
            <Link
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out delay-150"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out delay-150"
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out delay-150"
            >
              <details onClose={() => setIsOpen(false)} >

              </details>
            </div>
            <div
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out delay-150"
            >
              <details onClose={() => setIsOpen(false)} >
              </details>
            </div>
            <Link
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out delay-150"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
          <button
            className="w-full text-black bg-green-400 px-5 py-3 hover:bg-white mt-4 transition ease-in-out duration-300"
            type="submit"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </button>
        </div>
      </aside>
    </div>
  );
};

export default MobileNavbar;
