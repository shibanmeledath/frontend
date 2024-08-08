
import { Routes,Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Main from "./features/homeLayout/Main";
import About from "./features/homeLayout/About";
function App() {
  return <>
  <Routes>
    <Route path="/" element={<HomeLayout/>}>
    <Route index element={<Main/>}/>
    <Route path="about" element={<About/>} />
    </Route>

  </Routes>
  </>
    
}

export default App;
