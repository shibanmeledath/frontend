
import { Routes,Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./features/homeLayout/Home";
function App() {
  return <>
  <Routes>
    <Route path="/" element={<HomeLayout/>}>
    <Route index element={<Home/>} />
    
    </Route>

  </Routes>
  </>
    
}

export default App;
