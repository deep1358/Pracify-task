import React from "react";
import CommonHeader from "../utils/CommonHeader/CommonHeader";
import "./Producers.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const Producers = () => {
  return (
    <div className="producer">
      <CommonHeader image={false} header="Proudly presented by" />
      <div data-aos="zoom-in" className="carousel">
        <Carousel autoplay>
          <div>
            <div className="carousel-div">
              <img src="./image/Group 39.png" alt="pic1" />
              <img src="./image/Group 64.png" alt="pic2" />
              <img src="./image/Group 55.png" alt="pic3" />
              <img src="./image/Group 64.png" alt="pic4" />
              <img src="./image/Group 39.png" alt="pic5" />
            </div>
          </div>
          <div>
            <div className="carousel-div">
              <img src="./image/Group 39.png" alt="pic1" />
              <img src="./image/Group 64.png" alt="pic2" />
              <img src="./image/Group 55.png" alt="pic3" />
              <img src="./image/Group 64.png" alt="pic4" />
              <img src="./image/Group 39.png" alt="pic5" />
            </div>
          </div>
          <div>
            <div className="carousel-div">
              <img src="./image/Group 39.png" alt="pic1" />
              <img src="./image/Group 64.png" alt="pic2" />
              <img src="./image/Group 55.png" alt="pic3" />
              <img src="./image/Group 64.png" alt="pic4" />
              <img src="./image/Group 39.png" alt="pic5" />
            </div>
          </div>
          <div>
            <div className="carousel-div">
              <img src="./image/Group 39.png" alt="pic1" />
              <img src="./image/Group 64.png" alt="pic2" />
              <img src="./image/Group 55.png" alt="pic3" />
              <img src="./image/Group 64.png" alt="pic4" />
              <img src="./image/Group 39.png" alt="pic5" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Producers;
