import ServicesDropdown from './ServicesDropdown';
import ProductsDropdown from './ProductsDropdown';
import { NavLink, DropdownLink } from './PCLinks';
import ProfileIcon from './ProfileIcon';
import { useState } from 'react';
import UserProfile from '../UserProfile';

const PCNavbar = () => {
  const [profile, setProfile] = useState(false);

  const toggleProfile = () => {
    setProfile(!profile);
  };

  const handleSignOut = () => {
    // Add your sign-out logic here
    console.log('Signing out...');
  };

  return (
    <nav className="flex items-center space-x-10 ml-10 text-white text-lg font-bold transition duration-300 ease-in-out">
      <NavLink to='/#home'>
        Home
      </NavLink>

      <NavLink to='/#about'>
        About
      </NavLink>

      <DropdownLink to="/#services">
        <ServicesDropdown />
      </DropdownLink>

      <DropdownLink to="/#products">
        <ProductsDropdown />
      </DropdownLink>

      <NavLink to='/#contact'>
        Contact
      </NavLink>

     <UserProfile/>
    </nav>
  );
};

export default PCNavbar;
