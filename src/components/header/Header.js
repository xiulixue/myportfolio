/** @format */

import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Xiuli(Murphy) Xue</h1>
        <h3 className="text-light">Front-End Developer</h3>

        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
