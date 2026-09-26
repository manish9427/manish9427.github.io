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

  const closeNav = () => {
    setShowNavList(false);
  };

  const toggleNavList = () => {
    setShowNavList((prev) => !prev);
  };

  return (
    <div id="nav-menu">
      <nav className="center nav">
        <ul className={`nav__list ${showNavList ? "nav__list--open" : ""}`}>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={closeNav}
              className="link link--nav"
            >
              About
            </a>
          </li>

          <li className="nav__list-item">
            <a
              href="#techstack"
              onClick={closeNav}
              className="link link--nav"
            >
              Tech Stacks
            </a>
          </li>

          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={closeNav}
              className="link link--nav"
            >
              Skills
            </a>
          </li>

          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={closeNav}
              className="link link--nav"
            >
              Projects
            </a>
          </li>

          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={closeNav}
              className="link link--nav"
            >
              Contact
            </a>
          </li>

          <li id="resume-button-2" className="nav__list-item">
            <a
              id="resume-link-1"
              href="https://drive.google.com/file/d/1wdU1CxLO2XwZRAkIHtyR_Kvtk9NudVc7/view?usp=sharing"
              onClick={closeNav}
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
          aria-label={
            themename === "dark"
              ? "Switch to light theme"
              : "Switch to dark theme"
          }
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
          aria-label={
            showNavList ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={showNavList}
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </div>
  );
};
