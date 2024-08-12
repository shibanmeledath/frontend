import ServicesDropdown from './ServicesDropdown';
import ProductsDropdown from './ProductsDropdown';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const PCNavbar = () => {
  const location = useLocation();

  // Function to check if the current hash is active

  const isActive = (hash) => location.hash === hash;

  return (
    <nav className="hidden lg:flex space-x-10 ml-10 text-white text-lg font-bold transition duration-300 ease-in-out delay-150">
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-300 ease-in-out delay-150 ${
          isActive('#home') ? 'text-green-400 underline' : 'hover:text-green-400'
        }`}
         smooth to="#home"
      >
        Home
      </HashLink>
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-300 ease-in-out delay-150 ${
          isActive('#about') ? 'text-green-400 underline' : 'hover:text-green-400'
        }`}
        smooth to="#about"
      >
        About
      </HashLink>
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-200 ease-in-out delay-150 ${
          isActive('#services') ? 'text-green-400 underline' : 'hover:text-green-400'
        }`}
        smooth to="#services"
      >
        <ServicesDropdown />
      </HashLink>
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-300 ease-in-out delay-150 ${
          isActive('#products') ? 'text-green-400 underline' : 'hover:text-green-400'
        }`}
        smooth to="#products"
      >
        <ProductsDropdown />
      </HashLink>
      <HashLink
        className={`hover:underline underline-offset-4 transition duration-300 ease-in-out delay-150 ${
          isActive('#contact') ? 'text-green-400 underline' : 'hover:text-green-400'
        }`}
        smooth to="#contact"
      >
        Contact Us
      </HashLink>
      <button
        className="text-black bg-green-400 px-5 py-3 hover:bg-white transition ease-in-out duration-300"
        type="submit"
      >
        Let's Talk
      </button>
    </nav>
  );
};

export default PCNavbar;
