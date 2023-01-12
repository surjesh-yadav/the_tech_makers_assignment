import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Products from "./Products";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069770/WomenChoice-Images/img1-unsplash_jom0gw.avif"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069770/WomenChoice-Images/img1-unsplash_jom0gw.avif"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069770/WomenChoice-Images/img1-unsplash_jom0gw.avif"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Products />
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069770/WomenChoice-Images/img1-unsplash_jom0gw.avif"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069770/WomenChoice-Images/img1-unsplash_jom0gw.avif"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069770/WomenChoice-Images/img1-unsplash_jom0gw.avif"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
