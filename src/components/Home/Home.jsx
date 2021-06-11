/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div data-aos="fade-right" className="home-left">
          <p>Healthy life with</p>
          <h1>Nature Organic</h1>
          <p>
            Vegetables are the edible parts of a plant that is used in cooking
            or can be eaten now.
          </p>
          <button>Explore Now</button>
        </div>
        <div className="home-right">
          <div data-aos="zoom-in" className="home-right-image">
            <img src="./image/Group 228.png" alt="image" />
          </div>
          <img data-aos="fade-right" src="./image/Group 195.png" alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
