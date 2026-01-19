import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [skills] = useState([
    { name: "Java", level: "Primary", progress: 100, className: "java-progress"}, 
    { name: "Spring Boot", level: "Primary", progress: 85, className: "python-progress"}, 
    { name: "SQL (MySQL)", level: "Proficient", progress: 80, className: "web-progress"}, 
    { name: "Python", level: "Proficient", progress: 70, className: "sql-progress"}
  ]);

  return (
    <div>
      <h2>Core Backend Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.name} <span className="skill-level">- {skill.level}</span></span>
            <ProgressBar progress={skill.progress} className={skill.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
