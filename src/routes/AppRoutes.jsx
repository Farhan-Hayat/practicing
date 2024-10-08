import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const AppRoutes = () => {
  return ( 
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
   );
}
 
export default AppRoutes ;