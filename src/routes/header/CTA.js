/** @format */

import React from "react";
import Resume from "../../assets/resume.pdf";

const CTA = () => {
  const openResume = () => {
    window.open(`${Resume}`, "_blank");
  };
  return (
    <div className="cta">
      <a
        onClick={openResume}
        download
        className="btn btn-primary-left"
        target="_blank"
      >
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Get In Touch!
      </a>
    </div>
  );
};

export default CTA;
