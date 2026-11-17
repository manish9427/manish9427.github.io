import React from "react";
import "./Skills.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Skills = () => {
  const skills = [
    "Full Stack Development",
    "React.js & Next.js",
    "TypeScript & JavaScript",
    "Node.js & Express.js",
    "REST APIs & Microservices",
    "Redux Toolkit & Material-UI",
    "PostgreSQL & Sequelize",
    "Redis & Caching",
    "AWS (EC2, S3, RDS, CloudWatch)",
    "PM2 & CI/CD",
    "JWT, RBAC & Secure Cookies",
    "Internationalization (i18n)",
    "Core Web Vitals Optimization",
    "Design Patterns (Factory, Builder, CoR)",
    "Unit Testing (Jest)",
    "Agile/Scrum & Jira",
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
