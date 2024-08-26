import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./cart.css";
import axios from 'axios';

const Cart = ({ cart, setcart }) => {
    const incqty = (product) => {
       
        const exsit = cart.find((x) => x.id === product.id);
       
        setcart(
          cart.map((curele) => {
            return curele.id === product.id
              ? { ...exsit, qty: exsit.qty + 1 }
              : curele;
          })
        );
      };

    const decqty = (product) => {
       
        const exsit = cart.find((x) => x.id === product.id);
       
        setcart(
          cart.map((curele) => {
            return curele.id === product.id
              ? { ...exsit, qty: exsit.qty - 1 }
              : curele;
          })
        );
      };

      const removeproduct = (product) =>{
        const exsit = cart.find((x) => x.id === product.id);

        if(exsit.qty > 0){
            setcart(cart.filter((x) =>{
                return x.id !== product.id;
            }))
        }
      };

      const totalprice = cart.reduce((price , item) => price + item.qty * item.price, 0)

      const handleSubmit = async(e) => {
        e.preventDefault();
    
        let res = await axios.post('https://paypal-v2bn.onrender.com/payment',{
          totalprice:totalprice,
        });
        if(res && res.data){
          let link = res.data.links[1].href;
          window.location.href = link;
        }
      } 
  return (
    <>
      <div className="cartcontainer">
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is empty</h2>
            <Link to="/product">shop now</Link>
          </div>
        )}
        <div className="content">
          {cart.map((eachele) => {
            return (
              <div className="cart_item" key={eachele.id}>
                <div className="img_box">
                  <img src={eachele.img} alt={eachele.Title}></img>
                </div>
                <div className="detail">
                  <h4>{eachele.cat}</h4>
                  <h3>{eachele.Title}</h3>
                  <p> price : ${eachele.price}</p>
                  <div className="quantity">
                    <button className="incqty" onClick={() => incqty(eachele)}>
                      +
                    </button>
                    <input type="text" Value={eachele.qty}></input>
                    <button className="decqty" onClick={() => decqty(eachele)}>-</button>
                  </div>
                  <h4>sub total : ${eachele.price * eachele.qty}</h4>
                  <button onClick={() => removeproduct(eachele)}>
                    <RxCross2 />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {
            cart.length>0  && 
            <>
            <h2 className="totalprice">${totalprice}</h2>
            <button className="checkout" onClick={handleSubmit}>checkout</button>
            </>
        }
      </div>
    </>
  );
};

export default Cart;
