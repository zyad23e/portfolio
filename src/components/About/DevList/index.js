import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Git", level: "Proficient", progress: 90, className: "github-progress"},
    { name: "Postman", level: "Proficient", progress: 80, className: "postman-progress"},
    { name: "Amazon Web Services (AWS)", level: "Working Knowledge", progress: 65, className: "aws-progress"}
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>
              {dev.name}
              <span className="skill-level"> — {dev.level}</span>
            </span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
