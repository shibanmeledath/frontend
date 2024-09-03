import React from 'react'
import { Outlet} from "react-router-dom"
import Header from "../features/loginLayout/HeaderCompnents/Header"
import BackToTop from "../features/homeLayout/BackToTop"
import Footer from '../features/homeLayout/Footer'
import PageNotFound from '../features/PageNotFound'
const LoginLayout = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return (
    <>
    <div className='bg-white'>
    
    {
        user 
        ?(<>
        <Header/>
        <Outlet />
        <BackToTop/>
        <Footer/>
        </> )
        :(<PageNotFound/>)
    }
   
   
    </div>
  

        </>
  )
}

export default LoginLayout
