import React from "react";
import "./Skills.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Skills = () => {
  const skills = [
    "Front-End Technologies",
    "React.js & Next.js",
    "TypeScript & JavaScript",
    "Java 17 & Spring Boot",
    "Node.js, Nest.js & Express.js",
    "RESTful APIs & Microservices",
    "MySQL, PostgreSQL & MongoDB",
    "Redis, Flyway & Query Optimization",
    "AWS, Docker & CI/CD",
    "Spring Security & Authentication",
    "Data Structures & Algorithms",
    "System Design & Design Patterns",
    "OOP & Object-Oriented Programming",
    "Core Web Vitals Optimization",
    "Agile/Scrum & JIRA",
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
