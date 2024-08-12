import { Outlet } from "react-router-dom"
import Header from "../features/homeLayout/HeaderCompnents/Header"
import BackToTop from "../features/homeLayout/BackToTop"
const HomeLayout = () => {
  return (
    <>
<section  id="home">
<Header/>
<Outlet/>
<BackToTop/>
</section>
    </>
  )
}

export default HomeLayout
