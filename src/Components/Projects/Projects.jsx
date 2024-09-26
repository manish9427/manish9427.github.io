import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiChakraui,
  SiNetlify,
  SiMongodb,
  SiExpress,
  deSiNodotjs,
  SiJsonwebtokens,
  SiRedux,
  SiVisualstudiocode,
  SiNodemon,
  SiPostman,
  SiMaterialui,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
// import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div id="projects" className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/107556633/266614391-0b480973-b07f-4c21-bf06-9f21d649fdfb.png"
                    alt="Movix"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Movix</h2>
                <p class="project-description">
                  Movix is a movie information website that utilizes data from
                  TMDB (The Movie Database). It offers users to access a vast
                  collection of movie details, including plot summaries, cast,
                  crew, ratings, and more.
                </p>
                <div class="project-tech-stack">
                  <FaReact />
                  <SiRedux />
                  <SiVercel />
                </div>
                <div>
                  <a
                    class="project-deployed-link"
                    href="https://movix-bay.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/manish9427/movix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/107556633/232496669-a41100f7-8031-4196-bae9-82af87bd4d97.png"
                    alt="Farfetch"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Farfetch</h2>
                <p class="project-description">
                  Farfetch is a British-Portuguese online luxury fashion retail
                  platform that sells products from over 700 boutiques and
                  brands from around the world.
                </p>
                <div class="project-tech-stack">
                  <FaReact />
                  <SiRedux />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiChakraui />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    class="project-deployed-link"
                    href="https://farfetch-eight.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/manish9427/Farfetch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/107556633/222266516-435decdf-3c5a-4346-8d49-4be575be47f8.png"
                    alt="Beauty Bebo"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Beauty Bebo</h2>
                <p class="project-description">
                  BeautyBebo is India’s fastest growing online retail store for
                  the day to day and special occasion need of the Mackup, Skin
                  care, Hair care, Personal care, Mom and Baby care, Fragrance
                  and Ayurveda products.
                </p>
                <div class="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    class="project-deployed-link"
                    href="https://beautybebo-pt-web-08.netlify.app/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/Ramanpreet4718/BeautyBeboProject_Unit-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/107556633/222267680-09924de6-48fb-4bb9-aef7-2229da4d275e.png"
                    alt="Sephora"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Sephora</h2>
                <p class="project-description">
                  Sephora is a French multinational retailer of personal care
                  and beauty products. Sephora offers beauty products including
                  cosmetics, skincare, body, fragrance, nail color, beauty
                  tools, body lotions and haircare.
                </p>
                <div class="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    class="project-deployed-link"
                    href="https://suryathink.github.io/sephora-clone/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/suryathink/sephora-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="project-card"
            className="projects_container"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/107556633/222368900-47c47256-e233-4ebc-9a25-3443e8ef1e98.png"
                    alt="Quora"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Quora</h2>
                <p class="project-description">
                  Quora is a place to gain and share knowledge. It's a platform
                  to ask questions and connect with people who contribute unique
                  insights and quality answers.
                </p>
                <div class="project-tech-stack">
                  <FaReact />
                  <SiRedux />
                  <SiJsonwebtokens />
                  <SiMaterialui />
                  <SiChakraui />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    class="project-deployed-link"
                    href="https://quora-clone-project.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    class="project-github-link"
                    href="https://github.com/vishwajeet-7/Quora-clone-unit-6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
