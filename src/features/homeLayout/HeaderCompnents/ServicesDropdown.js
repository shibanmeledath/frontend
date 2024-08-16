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
        tabIndex="0"
        aria-haspopup="true"
        aria-expanded={isOpen}
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
            {Array.from({ length: 6 }).map((_, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-green-400 cursor-pointer transition ease-in-out duration-200"
                role="menuitem"
                tabIndex="0"
              >
                Item {index + 1}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
