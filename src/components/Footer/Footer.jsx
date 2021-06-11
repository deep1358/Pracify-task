import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src="./image/Group 229.png" alt="footer" />
      <div className="footer-left">
        <img src="./image/Group 225.png" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quod
          accusantium adipisci unde sint quasi nihil exercitationem expedita ab
        </p>
        <div className="footer-line"></div>
        <p>
          <b>&#169; CopyRight 2020 Nature</b>
        </p>
      </div>
      <div className="footer-center">
        <p>Information</p>
        <div className="footer-line"></div>
        <ul>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-right">
        <p>Follow Us</p>
        <div className="footer-line"></div>
        <div className="footer-icons">
          <img src="./image/Group 99.png" alt="fb" />
          <img src="./image/Group 100.png" alt="linkedin" />
          <img src="./image/Group 105.png" alt="tweeter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
