import { Outlet } from "react-router-dom"
import Header from "../features/homeLayout/HeaderCompnents/Header"
import BackToTop from "../features/homeLayout/BackToTop"
import Footer from "../features/homeLayout/Footer"
const HomeLayout = () => {
  return (
    <>
<section  id="home">
<Header/>
<Outlet/>
<BackToTop/>
<Footer/>
</section>
    </>
  )
}

export default HomeLayout
