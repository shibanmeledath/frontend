import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);


  return (
    <div>
      {/* Hamburger Button */}
      <button
className="fixed top-4 right-4 z-50 text-white hover:text-green-400 lg:hidden focus:outline-none transition duration-300 ease-in-out"


        onClick={() => {
            setIsOpen(!isOpen);
            setIsServicesOpen(false);
            setIsProductsOpen(false);
          }}
          
      >
        {isOpen ? (
          <span className='text-4xl '>&times;</span> // Close icon
        ) : (
          <span className='text-3xl'>&#9776;</span> // Hamburger icon
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black   text-white text-lg font-bold transform transition-transform duration-300 ease-in-out ${
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

            {/* Services Dropdown */}
            <div className="block py-2">
              <button
                className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out delay-150 w-full text-left"
                onClick={()=>setIsServicesOpen(!isServicesOpen)}
              >
                <div className='flex'>
                <span className="font-semibold">Services</span>
                {isServicesOpen?  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 mt-1.5 pl-0.5"
  >
    <path
      fillRule="evenodd"
      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
      clipRule="evenodd"
    />
  </svg>
: <svg
          className="w-4 h-4 mt-1.5 pl-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg> }
     
                </div>
               
              </button>
              {isServicesOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link to="/service1" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                      Service 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/service2" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                      Service 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/service3" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                      Service 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="block py-2">
              <button
                className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out delay-150 w-full text-left"
                onClick={()=>setIsProductsOpen(!isProductsOpen)}
              >
                  <div className='flex'>
                <span className="font-semibold">Products</span>
                {isProductsOpen?  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 mt-1.5 pl-0.5"
  >
    <path
      fillRule="evenodd"
      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
      clipRule="evenodd"
    />
  </svg>
: <svg
          className="w-4 h-4 mt-1.5 pl-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg> }
     
                </div>
              </button>
              {isProductsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link to="/product1" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                      Product 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/product2" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                      Product 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/product3" onClick={() => setIsOpen(false)} className="hover:text-green-400">
                      Product 3
                    </Link>
                  </li>
                </ul>
              )}
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
