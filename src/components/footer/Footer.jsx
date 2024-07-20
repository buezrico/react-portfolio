import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Chibueze (Rico) Okoronkwo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#services">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://m.me/goodness.igudy" target="_blank">
          {" "}
          <FaFacebookF />{" "}
        </a> */}
        <a
          href="https://instagram.com/buez_rico"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/buez_rico"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; buezrico. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
