/** @format */

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsPrinterFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const HeaderSocials = () => {
  const printPage = () => {
    window.print("", "_blank");
  };
  return (
    <div className="header-socials">
      <a href="http://www.linkedin.com/in/xiuli-xue" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/xiulixue" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/snowie.mophy" target="_blank">
        <FaFacebookF />
      </a>
      <a onClick={printPage} target="_blank">
        <BsPrinterFill />
      </a>
    </div>
  );
};

export default HeaderSocials;
