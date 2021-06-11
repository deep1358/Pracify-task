import React from "react";
import "./CommonHeader.css";

const CommonHeader = ({ header, image }) => {
  console.log(image);
  return (
    <div data-aos="fade-down" className="c-header">
      {image && <img src="./image/Group 114.png" alt="pic" />}
      <h3>{header}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eaque
        sunt nemo veniam voluptatibus qui culpa doloremque earum eum vero!
      </p>
    </div>
  );
};

export default CommonHeader;
