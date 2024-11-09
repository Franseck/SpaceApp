import Home from "../pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Navbar from "../component/Navbar";
import Galaxy from "../pages/Galaxy";



const AppRouter = () => {

    
      return (
        <div>
    <BrowserRouter>
      <Navbar/>
            <Routes>
                  <Route  exact path="/" element={<Home />} />
                   <Route   path="/Galaxy" element={<Galaxy />} />
                  <Route   path="/About" element={<About />} />
                  <Route path="*" element={<NotFound />} />
            </Routes>
  </BrowserRouter>
  
        </div>
      );
    };
    
    export default AppRouter;