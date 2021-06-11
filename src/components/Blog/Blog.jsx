import React from "react";
import "./Blog.css";
import CommonHeader from "../utils/CommonHeader/CommonHeader";
import { Card } from "antd";

const Blog = () => {
  const { Meta } = Card;

  return (
    <div className="blog">
      <CommonHeader image={true} header="Read Our Blog" />
      <div data-aos="zoom-up">
        <Card
          style={{
            width: 300,
            textAlign: "center",
            margin: "0 1rem",
            border: "none",
          }}
          cover={
            <img
              alt="example"
              src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/727d9732-3e11-42ee-a5eb-fc9ce16edba5.png"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />
          }
          actions={[<p>Read More</p>]}
        >
          <Meta
            title="Blog Post One"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis beatae quibusdam rerum minus"
          />
        </Card>
        <Card
          style={{
            width: 300,
            textAlign: "center",
            margin: "0 1rem",
            border: "none",
          }}
          cover={
            <img
              alt="example"
              src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/be9804d2-0ddd-496e-9ba4-2ad9731288da.png"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />
          }
          actions={[<p>Read More</p>]}
        >
          <Meta
            title="Blog Post One"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis beatae quibusdam rerum minus"
          />
        </Card>
        <Card
          style={{
            width: 300,
            textAlign: "center",
            margin: "0 1rem",
            border: "none",
          }}
          cover={
            <img
              alt="example"
              src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/374f5909-c57b-460f-bbf2-81105a4881f2.png"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />
          }
          actions={[<p>Read More</p>]}
        >
          <Meta
            title="Blog Post One"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis beatae quibusdam rerum minus"
          />
        </Card>
      </div>
    </div>
  );
};

export default Blog;
