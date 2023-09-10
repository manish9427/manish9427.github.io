import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import Skills from "./Skills";
import resume from "../../assets/Manish-Verma-Resume.pdf";

export const About = () => {
  return (
    <>
      <div id="about" class="about section" className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Manish Verma</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Aspiring Full-Stack Web Developer in MERN with a strong passion for
          technology and a deep desire to learn and grow. Passionate about
          building high-quality, elegant, user-friendly, intuitive websites and
          applications that delight users and exceed client expectations.
        </p>
        <div className="about__contact center">
          <a
            id="contact-github"
            href="https://github.com/manish9427"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            id="contact-email"
            href="mailto:manish119427@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            id="contact-phone"
            href="tel:+91-7355119427"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/manish-verma-9626701b5/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/Manish4387"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
        <a href={resume} download>
          <button className="btnResume">
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
