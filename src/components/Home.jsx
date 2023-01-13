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
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673590555/WomenChoice-Images/slider_20200711104752_5f09f4405bde6_rtqp2o.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673590432/WomenChoice-Images/diamond-city-demo-image-1200x470_z8zbpi.png"
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
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673590678/WomenChoice-Images/Products-Group-Image-Banner_w9kpxa.jpg"
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
              src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673590816/WomenChoice-Images/fashion-banner-design-template-fe6b9777ddea076fe92987420abcc46b_screen_cnkc8b.jpg"
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
