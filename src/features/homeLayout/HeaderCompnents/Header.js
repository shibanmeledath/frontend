import { useEffect, useState } from 'react';
import PCNavbar from './PCNavbar';
import MobileNavbar from './MobileNavbar';
const Header = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
  
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        setVisible(false); // Scrolling down - hide the header
      } else {
        setVisible(true); // Scrolling up - show the header
      }
  
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile scrolling
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-gray-900`}
  
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h2 className="text-white text-4xl font-semibold">CORFOC</h2>

          <div className="hidden lg:flex">
              <PCNavbar />
          </div>
          <div className="lg:hidden">
              <MobileNavbar />
          </div>
          
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;