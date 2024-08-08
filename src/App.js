
import { Routes,Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Main from "./features/homeLayout/Main";
import About from "./features/homeLayout/About";
import PageNotFound from "./features/PageNotFound";
function App() {
  return <>
  <Routes>
    <Route path="/" element={<HomeLayout/>}>
    <Route index element={<Main/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<PageNotFound/>} />
    </Route>
      <Route path="*" element={<PageNotFound/>} />
  </Routes>
  </>
    
}

export default App;
