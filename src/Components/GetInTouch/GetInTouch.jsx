import React from "react";
import "./GetInTouch.css";

import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import { ThemeContext } from "../../Context/theme";
import { Email } from "../Email/Email";

const GetInTouch = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <section id="contact" className="section">
      <h2 className="section__title" data-aos="fade-right">
        Get in <span className="different">Touch</span>
      </h2>

      <div className="contactMain">
        <div className={`contactInfo ${themename}`} data-aos="fade-right">
          <div className="contactcontainer">
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/manish9427/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="linkedin" />
            </a>

            <a
              id="contact-github"
              href="https://github.com/manish9427"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <VscGithub className="github" />
            </a>

            <a
              id="contact-email"
              href="mailto:manish119427@gmail.com"
              aria-label="Email"
            >
              <CgMail className="email" />
            </a>
          </div>

          <div className="mailNumber">
            <div className="contactDetail">
              <CgMail className="email" />
              <p>manish119427@gmail.com</p>
            </div>

            <div id="contact-phone" className="contactDetail">
              <BsFillTelephoneFill className="phone" />
              <p>+91-7355119427</p>
            </div>
          </div>
        </div>

        <div className="email-box" data-aos="fade-left">
          <Email />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
