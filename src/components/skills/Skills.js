/** @format */

import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const dataLanguage = [
  { id: 1, value: "JaveScript" },
  { id: 2, value: "HTML" },
  { id: 3, value: "CSS" },
  { id: 4, value: "TypeScript" },
  { id: 5, value: "SASS" },
  { id: 6, value: "SQL" },
  { id: 7, value: "C#" },

];
const dataTech = [
  { id: 1, value: "React JS" },
  { id: 2, value: "Node JS" },
  { id: 3, value: "Bootstrap" },
  { id: 4, value: "Git" },
  { id: 5, value: "AWS" },
  { id: 6, value: "VS Code" },
  { id: 7, value: "Agile" },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container skills-container">
        {/* Languages */}
        <div className="skills-grid">
          <h3>Languages</h3>
          <div className="skills-content">
            {dataLanguage.map(({ id, value }) => {
              return (
                <article className="skills-details">
                  <BsPatchCheckFill className="skills-details-icon" />
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
        <div className="skills-grid">
          <h3>Framework & Tech</h3>
          <div className="skills-content">
            {dataTech.map(({ id, value }) => {
              return (
                <article className="skills-details">
                  <BsPatchCheckFill className="skills-details-icon" />
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
