import React , { useState } from "react";
import Navbar from "./components/navbar/navbar.js";
import Footer from "./components/footer/footer.js";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/rout.js";

const App = () => {

  const [detail , setdetail] = useState([]);

  const [close,setclose] = useState(false);

  const view = (product) =>{
    setdetail([{...product}])
    setclose(true)
  }
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Rout detail={detail} view={view} close={close} setclose={setclose}/>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
