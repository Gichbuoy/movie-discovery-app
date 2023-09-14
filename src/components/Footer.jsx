import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="/">
          <AiFillYoutube />
        </a>
        <a href="/">
          <AiOutlineTwitter />
        </a>
        <a href="/">
          <AiOutlineInstagram />
        </a>
        <a href="/">
          <AiFillFacebook />
        </a>
      </div>
      <ul>
        <li>Terms & Conditions</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </ul>
      <p>  MovieBox-App © 2023 by Alexx  </p>
    </footer>
  );
};

export default Footer;
