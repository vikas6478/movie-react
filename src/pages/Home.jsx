import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={2000}>
     <img
          className="d-block w-100"
          src="public/avatar.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Avatar : Fire and Ash</h3>
          <p>Action/Fantasy</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="public/spider.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
         <h3>Dark Spider</h3>
          <p>Action/Fantasy</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="public/zootopia2.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
           <h3 style={{color:"black"}}>Zootopia 2</h3>
          <p style={{color:"black"}}>Family/Comedy</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
};

export default Home;
