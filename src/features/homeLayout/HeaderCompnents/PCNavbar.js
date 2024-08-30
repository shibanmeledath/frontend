import ServicesDropdown from './ServicesDropdown';
import ProductsDropdown from './ProductsDropdown';
import { NavLink ,DropdownLink } from './PCLinks'

const PCNavbar = () => {
  return (
    <nav className=" flex items-center space-x-10 ml-10 text-white text-lg font-bold transition duration-300 ease-in-out">
      <NavLink to='#home'>
        Home
      </NavLink>

      <NavLink to='#about'>
        About
      </NavLink>

        <DropdownLink to="#services">
           <ServicesDropdown />
        </DropdownLink>
      
        <DropdownLink to="#products">
           <ProductsDropdown />
        </DropdownLink>


       <NavLink to='#contact'>
        Contact
      </NavLink>
      <NavLink to='/registeration'>
        Login
      </NavLink> 
  
    </nav>
  );
};

export default PCNavbar;
