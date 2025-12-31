import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={2000}>
        <Link to="/book/Avatar:Fire&Ash">
     <img
          className="d-block w-100"
          src="avatar.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Avatar : Fire and Ash</h3>
          <p>Action/Fantasy</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <Link to="/book/Dark Spider">
        <img
          className="d-block w-100"
          src="spider.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
         <h3>Dark Spider</h3>
          <p>Action/Fantasy</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <Link to="/book/zootopia2">
        <img
          className="d-block w-100"
          src="zootopia2.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
           <h3 style={{color:"black"}}>Zootopia 2</h3>
          <p style={{color:"black"}}>Family/Comedy</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>

       <div className="home">

      <div className="movie-card">
        <img src="avatarpost.jpeg" />
        <h2>Avatar : fir & ash</h2>
        <Link to="/book/Avatar:fir & ash">
          <button>Book Now</button>
        </Link>
      </div>

      <div className="movie-card">
        <img src="freddy's2post.jpeg" />
        <h2>freddy's 2</h2>
        <Link to="/book/freddy'2">
          <button>Book Now</button>
        </Link>
      </div>

      <div className="movie-card">
        <img src="supergirlpost.jpeg" />
        <h2>super girl</h2>
        <Link to="/book/super girl">
          <button>Book Now</button>
        </Link>
      </div>
      
      <div className="movie-card">
        <img src="theodysseypost.jpeg" />
        <h2>the odyssey</h2>
        <Link to="/book/The Odyssey">
          <button>Book Now</button>
        </Link>
      </div>

    </div>
    </>
  )
};

export default Home;
