import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <div id="nav-menu">
        <nav class="nav-link home" className="center nav">
          <ul
            style={{ display: showNavList ? "flex" : null }}
            className="nav__list"
          >
            <li class="nav-link about" className="nav__list-item">
              <a
                href="#about"
                onClick={() => toggleNavList("#about")}
                className="link link--nav"
              >
                About
              </a>
            </li>
            <li className="nav__list-item">
              <a
                href="#techstack"
                onClick={() => toggleNavList("#techstack")}
                className="link link--nav"
              >
                Tech Stacks
              </a>
            </li>
            <li class="nav-link skills" className="nav__list-item">
              <a
                href="#skills"
                onClick={() => toggleNavList("#skills")}
                className="link link--nav"
              >
                Skills
              </a>
            </li>
            <li class="nav-link projects" className="nav__list-item">
              <a
                href="#projects"
                onClick={() => toggleNavList("#projects")}
                className="link link--nav"
              >
                Projects
              </a>
            </li>
            <li class="nav-link contact" className="nav__list-item">
              <a
                href="#contact"
                onClick={() => toggleNavList("#contact")}
                className="link link--nav"
              >
                Contact
              </a>
            </li>
            <li
              id="resume-button-2"
              class="nav-link resume"
              className="nav__list-item"
            >
              <a
                id="resume-link-1"
                href="https://drive.google.com/file/d/1wdU1CxLO2XwZRAkIHtyR_Kvtk9NudVc7/view?usp=sharing"
                onClick={toggleNavList}
                className="link link--nav"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          <button
            type="button"
            onClick={toggeltheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
            style={{ backgroundColor: "inherit" }}
          >
            {themename === "dark" ? (
              <WbSunnyRoundedIcon />
            ) : (
              <Brightness2Icon />
            )}
          </button>
          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav__hamburger"
            aria-label="toggle navigation"
          >
            {showNavList ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </div>
    </>
  );
};
