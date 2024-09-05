import { Outlet } from "react-router-dom";
import Header from "../components/HeaderCompnents/Header";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <>
      <section id="home">
        <Header />
        <main>
          <Outlet />
        </main>
        <BackToTop />
        <Footer />
      </section>
    </>
  );
}

export default HomeLayout;
