import React, { createContext } from 'react'
import { Outlet} from "react-router-dom"
import Header from "../features/loginLayout/HeaderCompnents/Header"
import BackToTop from "../features/homeLayout/BackToTop"
import Footer from '../features/homeLayout/Footer'
import PageNotFound from '../features/PageNotFound'
export const  usernameContext=createContext();
const LoginLayout = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
 const username=user?.username;
  return (
    <>
    <div className='bg-white'>
    
    {
        user 
        ?(<>
      <usernameContext.Provider value={username}>
        <Header/>
        <Outlet />
        <BackToTop/>
        <Footer/>
        </usernameContext.Provider>
        </> )
        :(<PageNotFound/>)
    }
   
   
    </div>
  

        </>
  )
}

export default LoginLayout
