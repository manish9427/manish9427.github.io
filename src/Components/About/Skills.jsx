import React from "react";
import "./Skills.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Skills = () => {
  const skills = [
    "Frontend Development",
    "React.js & Next.js",
    "TypeScript & JavaScript",
    "Node.js, Nest.js & Express.js",
    "REST APIs & Microservices",
    "PostgreSQL & MongoDB",
    "Redis & Database Optimization",
    "AWS, Docker & Kubernetes",
    "Data Structures & Algorithms",
    "System Design",
    "OOP, SOLID Principles & Design Patterns",
    "Authentication & Authorization",
    "Responsive Web Development",
    "Git & CI/CD",
    "Agile Development",
  ];

  return (
    <div id="skills" className="skills">
      <h2 className="section__title different">SKILLS</h2>

      <div className="skills__container">
        {skills.map((skill, index) => (
          <h4 className="different skills__item" key={index}>
            <span className="icons">
              <ExitToAppIcon />
            </span>
            {skill}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Skills;
