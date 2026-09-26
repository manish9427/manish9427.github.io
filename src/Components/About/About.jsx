import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import GetAppIcon from "@mui/icons-material/GetApp";

import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import Skills from "./Skills";

import resume from "../../assets/Manish-Verma-Resume.pdf";

export const About = () => {
  return (
    <>
      <div id="about" className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am{" "}
          <span className="about__name">Manish Verma</span>
        </h1>

        <Type />

        <p className="about__desc" data-aos="fade-right">
          Full-Stack Engineer with 2.6 years of experience building scalable
          web applications and microservices. Experienced in React.js,
          Next.js, TypeScript, Node.js, Nest.js, and Express.js, with hands-on
          experience in PostgreSQL, MongoDB, Redis, AWS, Docker, and Kubernetes.
          Passionate about clean code, scalable architecture, performance
          optimization, and building reliable user experiences.
        </p>

        <div className="about__contact center">
          <a
            id="contact-github"
            href="https://github.com/manish9427"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>

          <a
            id="contact-email"
            href="mailto:manish119427@gmail.com"
            aria-label="Email"
            className="link link--icon"
          >
            <EmailIcon />
          </a>

          <a
            id="contact-phone"
            href="tel:+917355119427"
            aria-label="Phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>

          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/manish9427/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://twitter.com/verma9427"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <TwitterIcon />
          </a>
        </div>

        <a href={resume} download>
          <button className="btnResume" type="button">
            Resume <GetAppIcon className="resume-dwnld" />
          </button>
        </a>
      </div>

      <Introduction />

      <section id="techstack">
        <Techstacks />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </>
  );
};
