import React from "react";
import Navbar from "./components/navbar/navbar.js";
import Footer from "./components/footer/footer.js";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/rout.js";

const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Rout/>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
