import React from "react";
import "./Techstacks.css";

import { FaReact } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiJava,
  SiPython,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPm2,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiGitlab,
  SiMaterialui,
  SiSequelize,
  SiAmazonaws,
  SiGithubactions,
  SiTwilio,
  SiJsonwebtokens,
  SiJest,
  SiJira,
  SiOpenai,
} from "react-icons/si";

export const Techstacks = () => {
  const techStacks = [
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiJava />,
      name: "Java",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
    },
    {
      icon: <SiMaterialui />,
      name: "Material UI",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.IO",
    },
    {
      icon: <SiPm2 />,
      name: "PM2",
    },
    {
      icon: <SiTwilio />,
      name: "Twilio",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiSequelize />,
      name: "Sequelize",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <SiAmazonaws />,
      name: "AWS",
    },
    {
      icon: <SiGithubactions />,
      name: "GitHub Actions",
    },
    {
      icon: <SiJsonwebtokens />,
      name: "JWT",
    },
    {
      icon: <SiJest />,
      name: "Jest",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiGitlab />,
      name: "GitLab",
    },
    {
      icon: <SiJira />,
      name: "Jira",
    },
    {
      icon: <SiOpenai />,
      name: "LLMs & RAG",
    },
  ];

  return (
    <div id="techstack" className="section main" data-aos="fade-right">
      <h2 className="section__title different">TECH STACKS</h2>

      <div className="techsection">
        {techStacks.map((tech, index) => (
          <div className="skills-card-img" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <h5 className="skills-card-name">{tech.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
