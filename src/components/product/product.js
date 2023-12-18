import React, { useState } from "react";
import Productdetail from "./productdetail";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import "./product.css";

const Product = () => {
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
      <div className="products">
        <h3>Products</h3>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
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
                          <li>
                            <FiShoppingCart />
                          </li>
                          <li>
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
                        <h4>{product.price}</h4>
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
