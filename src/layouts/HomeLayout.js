import { Outlet } from "react-router-dom"
import Header from "../features/homeLayout/HeaderCompnents/Header"
const HomeLayout = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    </>
  )
}

export default HomeLayout
