
import PCNavbar from './PCNavbar';
import MobileNavbar from './MobileNavbar';
const Header = () => {

  return (
    <>
       <header className="bg-black w-full">
      <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h2 className="text-white text-4xl">CORFOC</h2>
          <div className="flex items-center">
   

          
           <PCNavbar/>
          </div>
        </div>
      </div>

    
      <MobileNavbar/>
    
    </header>
    </>
  )
}

export default Header
