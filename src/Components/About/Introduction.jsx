import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpeg";

export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <section>
      <div id="about" className="section" data-aos="fade-right">
        <h2 className="section__title">
          About <span className="different">Me</span>
        </h2>

        <div className={`introduction ${themename}`}>
          <div className="introduction_logocontainer">
            <img src={profilePic} alt="Manish Verma" />
          </div>

          <div
            id="user-detail-intro"
            className="introduction_datacontainer"
          >
            <h4>
              Hi Everyone 👋 My name is{" "}
              <span className="different">Manish Verma</span>. I am a{" "}
              <span className="different">Full Stack Developer</span> with{" "}
              <span className="different">2.6 years</span> of experience
              designing, developing, and scaling multi-region web applications
              and microservices across 16 countries using Node.js, Express.js,
              TypeScript, React.js, and Next.js.
            </h4>

            <h4>
              I specialize in{" "}
              <span className="different">
                React.js, Next.js, Redux Toolkit, Material-UI, Node.js,
                Express.js, TypeScript, REST APIs, Socket.IO, and
                internationalization (i18n)
              </span>
              , with hands-on experience in{" "}
              <span className="different">
                PostgreSQL, MongoDB, Redis, AWS, JWT, RBAC, and CI/CD
              </span>
              .
            </h4>

            <h4>
              At <span className="different">Lycadigital</span>, I architected
              a unified Next.js/React/TypeScript frontend for Lyca Mobile
              portals across{" "}
              <span className="different">16 countries and 4 locales</span>{" "}
              per market, and developed a multi-module backend (Mediation,
              Profile, Rate, Common) for subscriber lifecycle, SIM activation,
              bundle/tariff management, and multi-country checkout. I also
              built OTP/password auth with JWT &amp; RBAC, real-time updates
              via Socket.IO, Twilio SMS &amp; AWS SES notifications, and an
              eKYC OCR pipeline using Tesseract &amp; pdf-lib on AWS S3.
            </h4>

            <h4>
              I am passionate about{" "}
              <span className="different">
                AI &amp; LLMs (RAG, prompt engineering), performance
                optimization (~50% LCP improvement), system design, secure
                authentication, and reliable user experiences
              </span>
              .
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};