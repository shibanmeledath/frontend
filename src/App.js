import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Main from "./features/homeLayout/Main";
import PageNotFound from "./features/PageNotFound";
import Register from "./features/Register";
import Login from "./features/Login";
function App() {
  return (
    <section className="bg-hero-gradient bg-cover">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="registeration" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </section>
  );
}

export default App;
