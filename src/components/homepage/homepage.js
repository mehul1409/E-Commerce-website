import React, { useState } from "react";
import "./homepage.css";
import Homeproduct from "../homeproduct";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Homepage = () => {
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
              <img src="/images/smartphone.avif"></img>
            </div>
          </div>
          <div className="productname">Smartphones</div>
        </div>
        <div className="item">
          <div className="productdetail">
            <div className="product">
              <img src="/images/Assets/earbuds-prod-3.webp"></img>
            </div>
          </div>
          <div className="productname">Earbuds</div>
        </div>
        <div className="item">
          <div className="productdetail">
            <div className="product">
              <img src="/images/headphone.avif"></img>
            </div>
          </div>
          <div className="productname">Headphones</div>
        </div>
        <div className="item">
          <div className="productdetail">
            <div className="product">
              <img src="/images/watches.avif"></img>
            </div>
          </div>
          <div className="productname">Watches</div>
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
                    <li><FiShoppingCart /></li>
                    <li><FaRegEye /></li>
                    <li><CiHeart /></li>
                  </div>
                </div>
                <div className="details">
                    <p>{eachele.cat}</p>
                    <h3>{eachele.Title}</h3>
                    <h4>{eachele.price}</h4>
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
