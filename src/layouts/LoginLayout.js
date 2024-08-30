import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../features/homeLayout/HeaderCompnents/Header"
import BackToTop from "../features/homeLayout/BackToTop"
import Footer from '../features/homeLayout/Footer'
const LoginLayout = () => {
  return (
    <>

    <Header/>
    <Outlet/>
    <BackToTop/>
    <Footer/>

        </>
  )
}

export default LoginLayout
