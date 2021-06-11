import React from "react";
import CommonHeader from "../utils/CommonHeader/CommonHeader";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <CommonHeader image={true} header="Welcome to Nature" />
      <div data-aos="fade-down" className="products-images">
        <img src="./image/Group 207.png" alt="pic1" />
        <img src="./image/Group 205.png" alt="pic2" />
        <img src="./image/Group 207.png" alt="pic3" />
        <img src="./image/Group 207.png" alt="pic4" />
      </div>
    </div>
  );
};

export default Products;
