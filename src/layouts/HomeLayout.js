import { Outlet } from "react-router-dom"
import Header from "../components/HeaderCompnents/Header"
import BackToTop from "../components/BackToTop"
import Footer from "../components/Footer"
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
