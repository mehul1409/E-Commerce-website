import React from "react";
import {Routes , Route} from 'react-router-dom';
import Homepage from "./homepage/homepage";
import Product from "./product/product";

const Rout = () =>{
    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    )
}

export default Rout;