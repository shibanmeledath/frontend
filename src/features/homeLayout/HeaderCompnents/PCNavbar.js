
import ServicesDropdown from './ServicesDropdown';
import ProductsDropdown from './ProductsDropdown';
import { Link } from 'react-router-dom';
const PCNavbar = () => {
  return (
    <>
          <nav className="hidden lg:flex space-x-10 ml-10 text-white text-lg font-bold transition duration-300 ease-in-out delay-150">

              <Link  className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out  delay-150" to={'/'} > 
              Home</Link>
              <Link  className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out  delay-150" to={'/about'} > 
              About</Link>
              <Link  className="hover:underline underline-offset-4 hover:text-green-400 transition duration-200 ease-in-out  delay-150" to={'/'} > 
             <ServicesDropdown/> </Link>
              <Link  className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out  delay-150" to={'/'} > 
              <ProductsDropdown/></Link>
              <Link  className="hover:underline underline-offset-4 hover:text-green-400 transition duration-300 ease-in-out  delay-150" to={'/'} > 
              Contact Us</Link>
              <button
                className=" text-black bg-green-400 px-5 py-3 hover:bg-white tansition ease-in-out duration-300 "
                type="submit"
              >
                Let's Talk
              </button>
            </nav>
    </>
  )
}

export default PCNavbar
