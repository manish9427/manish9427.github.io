import React from "react";
import "./GetInTouch.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
import { Email } from "../Email/Email";
const GetInTouch = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div id="contact" className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div>
            <br />
            <div
              className={"contactcontainer " + themename}
              data-aos="fade-right"
            >
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/manish-verma-9626701b5/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="linkedin" />
              </a>
              <a
                id="contact-github"
                href="https://github.com/manish9427"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub className="github" />
              </a>
              <a
                href="mailto:manish119427@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <CgMail className="email" />
              </a>
            </div>
            <br />
            <div
              id="contact-email"
              className="mailNumber"
              data-aos="fade-right"
            >
              <div>
                <span>
                  <CgMail className="email" />
                </span>
                <span>
                  <p>manish119427@gmail.com</p>
                </span>
              </div>
              <div id="contact-phone" className="iconsCont">
                <span>
                  <BsFillTelephoneFill className="phone" />
                </span>
                <span>
                  <p>+91-7355119427</p>
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className="email-box">
            <Email />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
