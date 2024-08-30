import { HashLink } from 'react-router-hash-link';
const NavLink= ({ to, children ,onClick}) => {
    return (
      <HashLink
        className="block hover:underline underline-offset-4 hover:text-green-400 py-2 transition duration-300 ease-in-out"
        to={to}
        onClick={onClick} 
        aria-label={to}
      >
        {children}
      </HashLink>
    );
  };

  const DropdownLink= ({ to, children,onClick }) => {
    return (
        <li>
           <HashLink
        className="hover:text-green-400"
        to={to}
        onClick={onClick} 
        aria-label={to}
      >
        {children}
      </HashLink>
        </li>
   
    );
  };
export {NavLink,DropdownLink}