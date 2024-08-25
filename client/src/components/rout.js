import React from "react";
import {Routes , Route} from 'react-router-dom';
import Homepage from "./homepage/homepage";
import Product from "./product/product";
import Cart from "./cart/cart";

const Rout = ({detail , view , close ,setclose , cart , setcart , addtocart}) =>{
    return (
      <Routes>
        <Route path='/' element={<Homepage addtocart={addtocart} />} />
        <Route path='/product' element={<Product detail={detail} view={view} close={close} setclose={setclose} addtocart={addtocart} />}/>
        <Route path='/cart' element={<Cart cart={cart} setcart={setcart} />} />
      </Routes>
    )
}

export default Rout;