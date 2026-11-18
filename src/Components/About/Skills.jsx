import React from "react";
import "./Skills.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Skills = () => {
  const skills = [
    "Full Stack Development",
    "React.js & Next.js",
    "TypeScript & JavaScript",
    "Java & Python",
    "Node.js & Express.js",
    "REST APIs & Microservices",
    "Socket.IO & Real-Time Events",
    "Redux Toolkit & Material-UI",
    "PostgreSQL & MongoDB",
    "Sequelize & Mongoose",
    "Redis & Caching",
    "AWS (EC2, S3, SES, RDS, CloudWatch)",
    "GitHub Actions (CI/CD) & PM2",
    "JWT, RBAC & Secure Cookies",
    "Internationalization (i18n)",
    "Core Web Vitals Optimization",
    "System Design & DSA",
    "Design Patterns (Factory, Builder, CoR)",
    "Unit & Integration Testing (Jest, Supertest)",
    "eKYC OCR (Tesseract, pdf-lib)",
    "Agile/Scrum & Jira",
    "LLMs, RAG & Prompt Engineering",
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
