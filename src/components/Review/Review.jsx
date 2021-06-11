import React from "react";
import "./Review.css";
import CommonHeader from "../utils/CommonHeader/CommonHeader";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const Review = () => {
  return (
    <div className="review">
      <img data-aos="fade-left" src="./image/Group 134.png" alt="leaf" />
      <div className="review-top">
        <img data-aos="zoom-in" src="./image/Group 86.png" alt="quote" />
        <div data-aos="zoom-in" className="review-top-carousel">
          <Carousel autoplay>
            <div>
              <div className="carousel-div">
                <img
                  className="carousel-image"
                  src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/227d3cd4-2e34-43a0-88ea-07a6d433e463.png"
                  alt="quote"
                  width="150px"
                  height="150px"
                />
                <p>John Doe</p>
                <div className="review-stars">
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star1"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star2"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star3"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star4"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star5"
                  />
                </div>
                <p>
                  Thank you for all the amazing produce and products you deliver
                  each week...
                </p>
                <p>
                  you make my life so easy and bring goodness into our family
                  eating.
                </p>
                <p>I've been roasting a lot of brussel sprouts and</p>
              </div>
            </div>
            <div>
              <div className="carousel-div">
                <img
                  className="carousel-image"
                  src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/227d3cd4-2e34-43a0-88ea-07a6d433e463.png"
                  alt="quote"
                  width="150px"
                  height="150px"
                />
                <p>John Doe</p>
                <div className="review-stars">
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star1"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star2"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star3"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star4"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star5"
                  />
                </div>
                <p>
                  Thank you for all the amazing produce and products you deliver
                  each week...
                </p>
                <p>
                  you make my life so easy and bring goodness into our family
                  eating.
                </p>
                <p>I've been roasting a lot of brussel sprouts and</p>
              </div>
            </div>
            <div>
              <div className="carousel-div">
                <img
                  className="carousel-image"
                  src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/227d3cd4-2e34-43a0-88ea-07a6d433e463.png"
                  alt="quote"
                  width="150px"
                  height="150px"
                />
                <p>John Doe</p>
                <div className="review-stars">
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star1"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star2"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star3"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star4"
                  />
                  <img
                    src="https://img.icons8.com/ios/26/00dbd0/star--v1.png"
                    alt="star5"
                  />
                </div>
                <p>
                  Thank you for all the amazing produce and products you deliver
                  each week...
                </p>
                <p>
                  you make my life so easy and bring goodness into our family
                  eating.
                </p>
                <p>I've been roasting a lot of brussel sprouts and</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div data-aos="zoom-in" className="review-bottom">
        <CommonHeader image={false} header="Subscribe to our Newsletter" />
        <div className="review-bottom-input">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
