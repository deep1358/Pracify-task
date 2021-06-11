import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="./image/Group 220.png" alt="logo" />
        <h1>organic</h1>
      </div>
      <div className="nav-list">
        <ul>
          <li className="active">Home</li>
          <li>Products</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
