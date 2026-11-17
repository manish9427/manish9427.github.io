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

void resume; // local copy kept as backup; button downloads from Drive

export const About = () => {
  return (
    <>
      <div id="hero" className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am{" "}
          <span className="about__name">Manish Verma</span>
        </h1>

        <Type />

        <p className="about__desc" data-aos="fade-right">
          Full Stack Developer with 2.6 years of experience designing,
          developing, and scaling web applications and microservices using
          Node.js, Express.js, TypeScript, React.js, and Next.js. Experienced
          in building multi-region, multilingual portals deployed across 16
          countries, developing REST APIs for payments, transactions, user
          lifecycle, and tariff management, and managing production workloads
          with PostgreSQL, Sequelize, Redis, and AWS.
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

        <a
          id="resume-link-2"
          href="https://drive.google.com/uc?export=download&id=1wdU1CxLO2XwZRAkIHtyR_Kvtk9NudVc7"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btnResume" type="button">
            Resume <GetAppIcon className="resume-dwnld" />
          </button>
        </a>
      </div>

      <Introduction />

      <Techstacks />

      <Skills />
    </>
  );
};
