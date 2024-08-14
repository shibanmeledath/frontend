import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <div className='fixed top-4 right-4 z-[60] lg:hidden'>
        <button
          className="relative text-white hover:text-green-400 focus:outline-none transition duration-300 ease-in-out"
          onClick={() => {
            setIsOpen(true);
            setIsServicesOpen(false);
            setIsProductsOpen(false);
          }}
        >
          {!isOpen && (
            <span className='text-3xl'>&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-64 h-screen bg-gray-900 text-white text-lg font-bold transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`} // Ensuring the sidebar is above other content
      >
        <div className="px-6 py-6">
          {/* Close Button */}
          <div className='absolute top-3 right-5'>
            <button
              className="relative text-white hover:text-green-400 focus:outline-none transition duration-300 ease-in-out"
              onClick={() => {
                setIsOpen(false);
                setIsServicesOpen(false);
                setIsProductsOpen(false);
              }}
            >
                 {isOpen && (
             <span className='text-4xl'>&times;</span> // Hamburger icon
          )}
              
            </button>
          </div>

          <h2 className="text-xl font-bold mb-6 ">CORFOC</h2>
          <nav className="space-y-4">
            <HashLink
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out"
              to="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </HashLink>
            <HashLink
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out"
              to="#about"
              onClick={() => setIsOpen(false)}
            >
              About
            </HashLink>

            {/* Services Dropdown */}
            <div className="py-2">
              <button
                className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out w-full text-left"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <div className='flex justify-between items-center'>
                  <span className="font-semibold">Services</span>
                  {isServicesOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
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
                    </svg>
                  )}
                </div>
              </button>
              {isServicesOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <HashLink
                      to="#service1"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-400"
                    >
                      Service 1
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="#service2"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-400"
                    >
                      Service 2
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="#service3"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-400"
                    >
                      Service 3
                    </HashLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="py-2">
              <button
                className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out w-full text-left"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <div className='flex justify-between items-center'>
                  <span className="font-semibold">Products</span>
                  {isProductsOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
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
                    </svg>
                  )}
                </div>
              </button>
              {isProductsOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <HashLink
                      to="#product1"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-400"
                    >
                      Product 1
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="#product2"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-400"
                    >
                      Product 2
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="#product3"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-400"
                    >
                      Product 3
                    </HashLink>
                  </li>
                </ul>
              )}
            </div>

            <HashLink
              className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out"
              to="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </HashLink>
          </nav>
          <button
            className="w-full text-black bg-green-400 px-5 py-3 hover:bg-white mt-6 transition ease-in-out duration-300"
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
