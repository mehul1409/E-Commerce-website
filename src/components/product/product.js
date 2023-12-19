import React, { useState } from "react";
import Productdetail from "./productdetail";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";

import "./product.css";

const Product = ({ detail, view, close, setclose, addtocart }) => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [products, setProducts] = useState(Productdetail);

  const filterProducts = (productCategory) => {
    const updatedProducts = Productdetail.filter((product) => {
      return product.cat === productCategory;
    });

    setProducts(updatedProducts);
  };

  const showAllProducts = () => {
    setProducts(Productdetail);
  };

  return (
    <>
      {close ? (
        <div className="productdetailpage">
          <div className="detailcontainer">
            <button className="crossbutton" onClick={() => setclose(false)}>
              <RxCross2 />
            </button>
            {detail.map((x) => {
              return (
                <div className="productdetailbox">
                  <div className="productimagebox">
                    <img src={x.img} alt={x.Title}></img>
                  </div>
                  <div className="detailproject">
                    <h4>{x.cat}</h4>
                    <h3>{x.Title}</h3>
                    <h3>${x.price}</h3>
                    <button>Add to cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="products">
        <h3 className="productsectionheading">Products</h3>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3 className="productsectionheading">Categories</h3>
              <ul>
                <li onClick={() => showAllProducts()}>All products</li>
                <li onClick={() => filterProducts("earbuds")}>Earbuds</li>
                <li onClick={() => filterProducts("hoodies")}>Hoodies</li>
                <li onClick={() => filterProducts("smartphone")}>
                  Smartphones
                </li>
                <li onClick={() => filterProducts("speakers")}>Speakers</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="rightsidecontainer">
              {products.map((product) => {
                return (
                  <>
                    <div className="box" key={product.id}>
                      <div className="img_box">
                        <img src={product.img} alt={product.Title}></img>
                        <div className="icon">
                          {
                            isAuthenticated ?
                            <li onClick={() => addtocart(product)}>
                            <FiShoppingCart />
                          </li>
                          :
                          <li onClick={() => loginWithRedirect()}>
                            <FiShoppingCart />
                          </li>
                          }

                          <li onClick={() => view(product)}>
                            <FaRegEye />
                          </li>
                          <li>
                            <CiHeart />
                          </li>
                        </div>
                      </div>
                      <div className="details">
                        <p>{product.cat}</p>
                        <h3>{product.Title}</h3>
                        <h4>${product.price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
