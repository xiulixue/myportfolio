/** @format */

import React from "react";
import "./projects.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.jpg";
import IMG4 from "../../assets/project4.jpg";
import IMG5 from "../../assets/project5.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "vk6.com.au is a commerce website based on Shopify platform. Customers can purchase products, write reviews. It has blogs public function.",
    // github: "Nill",
    demo: "https://vk6.com.au/",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "This is a WordPress based website that displays the RTO's infomation with ability to create stendents enrolment using API.",
    // github: "Nill",
    demo: "https://www.charter.edu.au/",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "Personal portfolio built on ReactJS with user friendly navigation system. You can download my resume here and contact me via the page.",
    github: "https://github.com/xiulixue/XiuliXue-Portfolio",
    demo: "https://xiulixue.github.io/XiuliXue-Portfolio",
  },

  {
    id: 4,
    image: IMG4,
    title:
      "Unisense.com.au is a commerce displaying website with beautiful design. Potential clients can search services and navigate to the company site.",
    // github: "Nill",
    demo: "http://www.unisense.com.au/",
  },

  {
    id: 5,
    image: IMG5,
    title:
      "This is a independent-develoment project about a HR system with ability to create employers list and manage employers' details.",
    github: "https://github.com/xiulixue/MobileAppReactNative",
    // demo: "Nill",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container projects_container">
        {data.map(({ id, image, title, tech, github, demo }) => {
          return (
            <article key={id} className="projects_item">
              <div className="projects_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live & Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
