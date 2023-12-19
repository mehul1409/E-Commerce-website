import React, { useState , useEffect } from "react";
import Navbar from "./components/navbar/navbar.js";
import Footer from "./components/footer/footer.js";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/rout.js";
import Productdetail from "./components/product/productdetail.js";


const App = () => {
  const [detail, setdetail] = useState([]);

  const [product , setproduct] = useState(Productdetail)

  const [close, setclose] = useState(false);

  const [cart, setcart] = useState([]);

  const view = (product) => {
    setdetail([{ ...product }]);
    setclose(true);
  };

  const addtocart = (product) => {
    const change = Productdetail.filter((y) =>{
      return y.id = product
    })
    setproduct(change);
    
    const exist = cart.find((x) => x.id === product.id);

    if (exist) {
      alert("this product is already added to cart");
    } else {
      setcart([...cart, { ...product, qty: 1 }]);
      alert("product added to cart");
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Rout
        detail={detail}
        view={view}
        close={close}
        setclose={setclose}
        cart={cart}
        setcart={setcart}
        addtocart={addtocart}
      />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
