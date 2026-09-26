import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerBox">
        <p className="footer">
          Made with <span className="footerHeart">❤</span> by{" "}
          <span className="footerName">Manish Verma</span>
        </p>
      </div>
    </footer>
  );
};