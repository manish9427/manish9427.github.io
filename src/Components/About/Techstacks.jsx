import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiChakraui,
  SiVisualstudiocode,
  SiNetlify,
  SiVercel,
  SiNodedotjs,
  SiNodemon,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiMaterialui,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">TECH STACKS</h2>
        <div class="skills-card" className="techsection">
          <div class="skills-card-img">
            <SiHtml5 />
            <h5 class="skills-card-name">HTML</h5>
          </div>
          <div class="skills-card-img">
            <DiCss3 />
            <h5 class="skills-card-name">CSS</h5>
          </div>
          <div class="skills-card-img">
            <SiJavascript />
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div class="skills-card-img">
            <FaReact />
            <h5 class="skills-card-name">React</h5>
          </div>
          <div class="skills-card-img">
            <SiRedux />
            <h5 class="skills-card-name">Redux</h5>
          </div>
          <div class="skills-card-img">
            <SiChakraui />
            <h5 class="skills-card-name">Chakra UI</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiVisualstudiocode />
            <h5>VS Code</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <SiVercel />
            <h5>Vercel</h5>
          </div>
          <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>MaterialUI</h5>
          </div>
          <div>
            <SiNodedotjs />
            <h5>Node Js</h5>
          </div>
          <div>
            <SiNodemon />
            <h5>Nodemon</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>Mongodb</h5>
          </div>
        </div>
      </div>
    </>
  );
};
