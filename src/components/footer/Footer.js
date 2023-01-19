/** @format */

import React from "react";
import "./footer.css";
// import { FaFacebookF } from "react-icons/fa";
// import { RiSoundcloudLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Xiuli(Murphy) Xue
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#skills">My Skills</a>
        </li>

        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      {/* <div className="footer_socials">
        <a href="https://www.facebook.com/XerxesArmani">
          <FaFacebookF />
        </a>

        <a href="https://soundcloud.com/immortals021">
          <RiSoundcloudLine />
        </a>
      </div> */}

      <div className="footer_copyright">
        <small>&copy; Xiuli-Murphy-Xue 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
