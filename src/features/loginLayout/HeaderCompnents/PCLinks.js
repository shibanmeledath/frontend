import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();

  // Function to check if the current hash is active
  const isActive = (hash) => location.hash === hash;

  return (
    <HashLink
      className={`hover:underline underline-offset-4 transition duration-300 ease-in-out ${
        isActive(to) ? 'text-green-400' : 'hover:text-green-400'
      }`}
      smooth
      to={to}
      aria-label={to}
    >
      {children}
    </HashLink>
  );
};

const DropdownLink = ({ to, children }) => {
  const location = useLocation();

  const isActive = (hash) => location.hash === hash;

  return (
    <div className="relative">
      <HashLink
        className={`flex items-center space-x-2 hover:underline underline-offset-4 transition duration-200 ease-in-out ${
          isActive(to) ? 'text-green-400' : 'hover:text-green-400'
        }`}
        smooth
        to={to}
        aria-label={to}
      >
        {children}
      </HashLink>
    </div>
  );
};

// Export both components as named exports
export { NavLink, DropdownLink };
