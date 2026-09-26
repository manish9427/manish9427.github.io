import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <header id="home" className={`header center ${themename}`}>
      <h3 className="header__logo">
        <a href="#home" className="link">
          Manish
        </a>
      </h3>

      <Navbar />
    </header>
  );
};
