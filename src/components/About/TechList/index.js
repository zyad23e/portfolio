import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    {name: "Spring Security ", level: "Proficient", progress: 90, className: "security-progress"},
    {name: "React ", level: "Proficient", progress: 80, className: "jdbc-progress"},
    {name: "Spring Data JPA/Hibernate ", level: "Proficient", progress: 80, className: "jpa-progress"},
    {name: "REST APIs ", level: "Proficient", progress: 75, className: "rest-progress"},
    {name: "Maven ", level: "Proficient", progress: 70, className: "maven-progress"},
    {name: "Thymeleaf ", level: "Proficient", progress: 70, className: "thymeleaf-progress"}
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}<span className="skill-level">- {tech.level}</span></span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
