import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
       <header className="bg-black w-full">
      <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h2 className="text-white text-4xl">CORFOC</h2>
          <div className="flex items-center">
            <button
              className="text-white hover:text-green-500 sm:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {/* Desktop Menu */}
            <nav className="hidden sm:flex space-x-4 ml-10 text-white">
              <a
                className="hover:underline underline-offset-1 hover:text-green-500"
                href="/"
              >
                Home
              </a>
              <a
                className="hover:underline underline-offset-1 hover:text-green-500"
                href="/about"
              >
                About
              </a>
              <a
                className="hover:underline underline-offset-1 hover:text-green-500"
                href="/services"
              >
                Services
              </a>
              <a
                className="hover:underline underline-offset-1 hover:text-green-500"
                href="/products"
              >
                Products
              </a>
              <a
                className="hover:underline underline-offset-1 hover:text-green-500"
                href="/contact"
              >
                Contact Us
              </a>
              <button
                className="bg-green-500 px-5 py-3 hover:bg-green-400"
                type="submit"
              >
                Let's Talk
              </button>
            </nav>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-black text-white px-4 py-2">
          <a
            className="block hover:underline underline-offset-1 hover:text-green-500 py-1"
            href="/"
          >
            Home
          </a>
          <a
            className="block hover:underline underline-offset-1 hover:text-green-500 py-1"
            href="/about"
          >
            About
          </a>
          <a
            className="block hover:underline underline-offset-1 hover:text-green-500 py-1"
            href="/services"
          >
            Services
          </a>
          <a
            className="block hover:underline underline-offset-1 hover:text-green-500 py-1"
            href="/products"
          >
            Products
          </a>
          <a
            className="block hover:underline underline-offset-1 hover:text-green-500 py-1"
            href="/contact"
          >
            Contact Us
          </a>
          <button
            className="w-full bg-green-500 px-5 py-3 hover:bg-green-400 mt-2"
            type="submit"
          >
            Let's Talk
          </button>
        </div>
      )}
    </header>
    </>
  )
}

export default Header
