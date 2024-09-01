import React from 'react'
import { Outlet ,useLocation } from "react-router-dom"
import Header from "../features/loginLayout/HeaderCompnents/Header"
import BackToTop from "../features/homeLayout/BackToTop"
import Footer from '../features/homeLayout/Footer'
import PageNotFound from '../features/PageNotFound'
const LoginLayout = () => {
    const location = useLocation();
    const { user} = location.state || {};
  return (
    <>

    <Header/>
    {
        user 
        ?( <Outlet />)
        :(<PageNotFound/>)
    }
   
    <BackToTop/>
    <Footer/>

        </>
  )
}

export default LoginLayout
