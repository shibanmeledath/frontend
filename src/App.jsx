import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Main from "./components/homeComponents/Main";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Forms/Register";
import Login from "./components/Forms/Login";
import LoginLayout from "./layouts/LoginLayout";
import MainLogined from "./components/logedComponents/MainLogined";

function App() {
  return (
    <section className="bg-hero-gradient bg-cover">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} />
        </Route>

        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Register />} />
        
        <Route path="logined" element={<LoginLayout />}> 
          <Route index element={<MainLogined />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;
