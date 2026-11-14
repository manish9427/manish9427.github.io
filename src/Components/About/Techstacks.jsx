import React from "react";
import "./Techstacks.css";

import { FaReact, FaDocker, FaAws } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiMaterialui,
  SiJenkins,
  SiSpring,
  SiMysql,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

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
      icon: <FaJava />,
      name: "Java 17",
    },
    {
      icon: <SiSpring />,
      name: "Spring Boot",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      icon: <SiNestjs />,
      name: "Nest.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
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
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
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
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiJenkins />,
      name: "Jenkins",
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
