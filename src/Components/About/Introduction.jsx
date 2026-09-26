import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpeg";

export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <section>
      <div id="user-detail-name" className="section" data-aos="fade-right">
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
              <span className="different">Full-Stack Engineer</span> with{" "}
              <span className="different">2.6 years of experience</span>{" "}
              building and scaling web platforms and microservices.
            </h4>

            <h4>
              I specialize in{" "}
              <span className="different">
                React.js, Next.js, TypeScript, Node.js, Nest.js, and Express.js
              </span>
              , with hands-on experience working with{" "}
              <span className="different">
                PostgreSQL, MongoDB, Redis, AWS, Docker, and Kubernetes
              </span>
              .
            </h4>

            <h4>
              At <span className="different">Lycadigital</span>, I have worked
              on multi-region platforms across{" "}
              <span className="different">16 countries</span>, building
              reusable UI components, REST APIs, microservices, payment
              integrations, authentication systems, and real-time applications.
            </h4>

            <h4>
              I am passionate about{" "}
              <span className="different">
                scalable architecture, clean code, system design, performance
                optimization, and building reliable user experiences
              </span>
              .
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};