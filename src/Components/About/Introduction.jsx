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
              designing, developing, and scaling web applications and
              microservices using Node.js, Express.js, TypeScript, React.js,
              and Next.js.
            </h4>

            <h4>
              I specialize in{" "}
              <span className="different">
                React.js, Next.js, Redux Toolkit, Material-UI, Node.js,
                Express.js, TypeScript, and REST APIs
              </span>
              , with hands-on experience in{" "}
              <span className="different">
                PostgreSQL, Sequelize, Redis, AWS, JWT, RBAC, and CI/CD
              </span>
              .
            </h4>

            <h4>
              At <span className="different">Lycadigital</span>, I architected
              and developed a unified Next.js, React.js, and TypeScript frontend
              for Lyca Mobile portals across{" "}
              <span className="different">16 countries and 4 locales</span>{" "}
              per market, built with JSON-based internationalization (i18n).
              I also designed and maintained four Node.js/Express.js
              microservices (Mediation, Profile, Rate, Common) supporting
              transactions, payments, user lifecycle, and tariff management.
            </h4>

            <h4>
              I am passionate about{" "}
              <span className="different">
                multi-region web applications, performance optimization
                (~50% LCP improvement), design patterns (Chain of
                Responsibility, Factory, Builder), secure authentication, and
                reliable user experiences
              </span>
              .
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};