import ServicesDropdown from './ServicesDropdown';
import ProductsDropdown from './ProductsDropdown';
import { NavLink ,DropdownLink } from './PCLinks'
import UserProfile from './UserProfile';
import { useContext } from 'react';
import { usernameContext } from '../../layouts/LoginLayout';
const PCNavbar = () => {
  /* const user=useContext(usernameContext) */
  const user = useContext(usernameContext)
  
  return (
    <nav className=" flex items-center space-x-10 ml-10 text-white text-lg font-bold transition duration-300 ease-in-out">
      <NavLink to='/#home'>
        Home
      </NavLink>

      <NavLink to='/#about'>
        About
      </NavLink>
        
        <DropdownLink to="/#services">
           <ServicesDropdown />
        </DropdownLink>
         {user 
         ? <DropdownLink to="/logined">
         <ProductsDropdown />
      </DropdownLink>
         : <DropdownLink to="/#products">
         <ProductsDropdown />
      </DropdownLink>}
       


       <NavLink to='/#contact'>
        Contact
      </NavLink>
   
      {
        user
        ? 
        <UserProfile/>
      
        : <NavLink to='/login'>
        Login
      </NavLink> 
      }
    
    </nav>
  );
};

export default PCNavbar;
