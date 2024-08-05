import React, { useState, useRef } from 'react';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Adjust delay as needed
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="cursor-pointer flex items-center space-x-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="font-semibold">Services</span>
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
      </div>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-1">
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-green-400 cursor-pointer transition ease-in-out duration-300 delay-150">
              Item 1
            </li>
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-green-400 cursor-pointer transition ease-in-out duration-300 delay-150">
              Item 2
            </li>
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-green-400 cursor-pointer transition ease-in-out duration-300 delay-150">
              Item 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
