/** @format */

import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiSoundcloudLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Xiuli(Murphy) Xue
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://www.facebook.com/XerxesArmani">
          <FaFacebookF />
        </a>

        <a href="https://soundcloud.com/immortals021">
          <RiSoundcloudLine />
        </a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; Xiuli-Murphy-Xue 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
