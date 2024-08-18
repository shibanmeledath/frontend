import ServicesDropdown from './ServicesDropdown';
import ProductsDropdown from './ProductsDropdown';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const PCNavbar = () => {
  const location = useLocation();

  // Function to check if the current hash is active
  const isActive = (hash) => location.hash === hash;

  return (
    <nav className="hidden lg:flex items-center space-x-10 ml-10 text-white text-lg font-bold transition duration-300 ease-in-out">
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-300 ease-in-out ${
          isActive('#home') ? 'text-green-400 ' : 'hover:text-green-400'
        }`}
        smooth
        to="#home"
        aria-label="Home"
      >
        Home
      </HashLink>
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-300 ease-in-out ${
          isActive('#about') ? 'text-green-400 ' : 'hover:text-green-400'
        }`}
        smooth
        to="#about"
        aria-label="About"
      >
        About
      </HashLink>
      <div className="relative">
        <HashLink
          className={`flex items-center space-x-2 hover:underline underline-offset-4 transition duration-200 ease-in-out ${
            isActive('#services') ? 'text-green-400 ' : 'hover:text-green-400'
          }`}
          smooth
          to="#services"
          aria-label="Services"
        >
           <ServicesDropdown />
        </HashLink>
      
      </div>
      <div className="relative">
        <HashLink
          className={`flex items-center space-x-2 hover:underline underline-offset-4 transition duration-300 ease-in-out ${
            isActive('#products') ? 'text-green-400 ' : 'hover:text-green-400'
          }`}
          smooth
          to="#products"
          aria-label="Products"
        >
           <ProductsDropdown />
        </HashLink>
       
      </div>
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-300 ease-in-out ${
          isActive('#contact') ? 'text-green-400 ' : 'hover:text-green-400'
        }`}
        smooth
        to="#contact"
        aria-label="Contact Us"
      >
        Contact Us
      </HashLink>
      <button
        className="text-black bg-green-400 px-5 py-3 hover:bg-white transition ease-in-out duration-300"
        type="button"
        aria-label="Let's Talk"
      >
        Let's Talk
      </button>
    </nav>
  );
};

export default PCNavbar;
