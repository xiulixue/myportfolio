/** @format */

import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const dataLanguage = [
  { id: 1, value: "JaveScripe" },
  { id: 2, value: "React" },
  { id: 3, value: "HTML" },
  { id: 4, value: "CSS" },
  { id: 5, value: "TypeScript" },
  { id: 6, value: "SQL" },
  { id: 7, value: "C#" },
  { id: 8, value: "OOP" },
];
const dataTech = [
  { id: 1, value: "Node JS" },
  { id: 2, value: "JSON" },
  { id: 3, value: "Boostrap" },
  { id: 4, value: "Git" },
  { id: 5, value: "Webpack" },
  { id: 6, value: "VS Code" },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container skills_container">
        {/* Languages */}
        <div className="skills_frontend">
          <h3>Languages</h3>
          <div className="skills_content">
            {dataLanguage.map(({ id, value }) => {
              return (
                <article className="skills_details">
                  <BsPatchCheckFill className="skills_details-icon" />
                  <div>
                    <h4>{value}</h4>
                    <small className="text-light"></small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* Framework & Technologies */}
        <div className="skills_backend">
          <h3>Framework & Tech</h3>
          <div className="skills_content">
            {dataTech.map(({ id, value }) => {
              return (
                <article className="skills_details">
                  <BsPatchCheckFill className="skills_details-icon" />
                  <div>
                    <h4>{value}</h4>
                    <small className="text-light"></small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
