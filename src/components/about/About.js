/** @format */

import React from "react";
import "./about.css";
// import ME from "../../assets/animate.jpg";
import ME1 from "../../assets/animate-active.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about_container">
        {/* <div class="about_me">
          <div class="about_me-image">
            <a href="https://www.tafensw.edu.au/alumni" target="_blank">
              <div class="flip-card-front">
                <img src={ME} alt="My Image" />
              </div>
              <div class="flip-card-back">
                <img src={ME1} alt="My Image" />
              </div>
            </a>
          </div>
        </div> */}

        <div className="about_me">
          <div className="about_me-image">
            <a href="https://www.tafensw.edu.au/alumni" target="_blank">
              <img src={ME1} alt="AboutMyImage" />
            </a>
          </div>
        </div>

        <div className="about_content">
          <p>
            I am a motivated and enthusiastic front-end developer, keen
            continuous learning and dedicated to delivering high-quality
            results. In my previous works, I found that more and more works
            involved IT, including website maintaining, digital content creating
            and deployment, SEO, system management, etc. I even did a lot of web
            front-end design for a brand, from which I developed a keen interest
            in web development and realised IT is the future. I have immersed in
            programming and developed several projects independently. Coupled
            with my previous jobs as marketing have helped hone my strong
            teamwork and time management skills, I believe I am qualified for a
            frontend developer position and will delivery positive outcomes to
            my future team. I'd love to have a chat about any opportunities you
            may have, so please get in touch!
          </p>

          <div className="links">
            <a href="#contact" className="btn btn-primary btn-primary-left">
              Let's Talk
            </a>
          </div>

          {/* <a href="#projects" className="scroll__down">
            Scroll Down
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
