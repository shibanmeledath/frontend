import React, { useState } from 'react';
import { NavLink,DropdownLink } from './MobileLinks';

const MobileNavbar = () => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    servicesOpen: false,
    productsOpen: false,
  })
  
  const isMenuOpen = menuState.isOpen;
  const isServicesOpen=menuState.servicesOpen;
  const isProductOpen =menuState.productsOpen;



  const handleLinkClick=()=>{
    setMenuState(prevState => ({ ...prevState, isOpen: false }))
  }

  const toggleMenuState=()=>{

    setMenuState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen,
      servicesOpen: false,
      productsOpen: false,
    }));

  }

  const toggleDropdown = (item) => {
    setMenuState(prevState => ({
      ...prevState,
      [item]: !prevState[item] 
    }));
  };




const DropdownList =({isitemopen,item,onClick})=>{
return(
  <button
                className="flex items-center justify-between w-full text-left hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out"
                onClick={onClick}
                aria-expanded={isitemopen}
                aria-controls="services-menu"
              >
                <span className="font-semibold">{item}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d={isitemopen
                      ? "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      : "M19 9l-7 7-7-7"}
                    clipRule="evenodd"
                  />
                </svg>
              </button>
)
}

const MenuIcon=()=>{
  return(
    <div className='fixed top-4 right-4 z-[60] '>
    <button
      className="text-white hover:text-green-400 focus:outline-none transition duration-300 ease-in-out"
      onClick={toggleMenuState}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      {!isMenuOpen ? (
        <span className='text-3xl'>&#9776;</span> 
      ) : (
        <span className='text-4xl'>&times;</span> 
      )}
    </button>
  </div>
  )
}


  return (
    <>
    
     
    <MenuIcon/>
     
      <aside
        className={`fixed top-0 right-0 w-64 h-screen bg-gray-900 text-white text-lg font-bold transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-6">
          <h2 className="text-xl font-bold mb-6">CORFOC</h2>
          
          <nav className="space-y-4">

            <NavLink
            to="#home"
            onClick={handleLinkClick}
            >
              
              Home
            </NavLink>

            <NavLink 
             to="#about"
             onClick={handleLinkClick}
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="py-2">
            <DropdownList
            isitemopen={isServicesOpen}
            item='Services'
            onClick={() =>toggleDropdown('servicesOpen')}
            >

            </DropdownList>
              {isServicesOpen && (
                <ul  className="ml-6 mt-2 space-y-2">
                 
                    <DropdownLink
                      to="#service1"
                      onClick={handleLinkClick}
                    >
                      Service 1
                    </DropdownLink>
                  
                 
                  <DropdownLink
                      to="#service2"
                      onClick={handleLinkClick}
                    >
                      Service 2
                    </DropdownLink>
                  
                 
                  <DropdownLink
                      to="#service3"
                      onClick={handleLinkClick}
                    >
                      Service 3
                    </DropdownLink>
                  
                </ul>
              )}
            </div>

       
            <div className="py-2">
            <DropdownList
            isitemopen={isProductOpen}
            item='Products'
            onClick={() =>toggleDropdown('productsOpen')}
            >

            </DropdownList>
              {isProductOpen && (
                <ul  className="ml-6 mt-2 space-y-2">
                 
                  <DropdownLink
                      to="#product1"
                      onClick={handleLinkClick}
                    >
                      Product 1
                    </DropdownLink>
                  
                 
                  <DropdownLink
                      to="#product2"
                      onClick={handleLinkClick}
                    >
                      Product 2
                    </DropdownLink>
                  
                  
                  <DropdownLink
                      to="#product3"
                      onClick={handleLinkClick}
                    >
                      Product 3
                    </DropdownLink>
                  
                </ul>
              )}

            </div>

            <NavLink
             to="#contact"
             onClick={handleLinkClick}
             >
              Contact Us
            </NavLink>
         <NavLink
             to="/registeration"
             onClick={handleLinkClick}
             >
              Login
            </NavLink> 
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MobileNavbar;
