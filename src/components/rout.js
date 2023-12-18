import React from "react";
import {Routes , Route} from 'react-router-dom';
import Homepage from "./homepage/homepage";
import Product from "./product/product";

const Rout = ({detail , view , close ,setclose}) =>{
    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product detail={detail} view={view} close={close} setclose={setclose}/>}/>
      </Routes>
    )
}

export default Rout;