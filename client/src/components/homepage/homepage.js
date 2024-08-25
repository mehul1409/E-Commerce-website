import React, { useState } from "react";
import "./homepage.css";
import Homeproduct from "../homeproduct";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Homepage = ({addtocart , view}) => {
  return (
    <>
      <div className="topbanner">
        <div className="detail">
          <p>Trending Smartphones of 2023</p>
          <button className="shopnow">Shop Now</button>
        </div>
        <div className="imagebox">
          <img src="\images\banner.jpg"></img>
        </div>
      </div>

      <div className="items">
        <div className="item">
          <div className="productdetail">
            <div className="product">
              <Link to='/product'>
              <img src="/images/smartphone.avif"></img>
              </Link>
            </div>
          </div>
          <div className="productname">
            <Link to='/product' className="productitem">smartphones</Link>
          </div>
        </div>
        <div className="item">
          <div className="productdetail">
            <div className="product">
            <Link to='/product'>
              <img src="/images/Assets/earbuds-prod-3.webp"></img>
              </Link>

            </div>
          </div>
          <div className="productname">
          <Link to='/product' className="productitem">Earbuds</Link>
          </div>
        </div>
        <div className="item">
          <div className="productdetail">
            <div className="product">
            <Link to='/product'>
              <img src="/images/headphone.avif"></img>
              </Link>

            </div>
          </div>
          <div className="productname">
          <Link to='/product' className="productitem">Headphones</Link>
          </div>
        </div>
        <div className="item">
          <div className="productdetail">
            <div className="product">
            <Link to='/product'>
              <img src="/images/watches.avif"></img>
              </Link>
            </div>
          </div>
          <div className="productname">
          <Link to='/product' className="productitem">watches</Link>
          </div>
        </div>
      </div>

      <div className="products">
        <h2>TOP PRODUCTS</h2>
        <div className="containers">
          {Homeproduct.map((eachele) => {
            return (
              <div className="box" key={eachele.id}>
                <div className="img_box">
                  <img src={eachele.img} alt={eachele.Title}></img>
                  <div className="icon">
                    <li onClick={() => addtocart(eachele)}><FiShoppingCart /></li>
                    <li onClick={() => view(eachele)}><FaRegEye /></li>
                    <li><CiHeart /></li>
                  </div>
                </div>
                <div className="details">
                    <p>{eachele.cat}</p>
                    <h3>{eachele.Title}</h3>
                    <h4>${eachele.price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
