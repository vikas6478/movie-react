import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaGoogle, FaFilm } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="movie-footer">

      <div className="footer-top">
        <div className="footer-brand">
          <FaFilm className="footer-icon" />
          <h2>MovieStar</h2>
          <p>Watch Unlimited Movies, Series & Shows Anytime, Anywhere.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">Series</a>
          <a href="#">Trending</a>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Help Center</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MovieStar. All Rights Reserved.</p>

        <div className="footer-social">
          <FaGoogle />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
