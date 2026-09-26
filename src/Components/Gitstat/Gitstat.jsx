import React from "react";
import "../Gitstat/Gitstat.css";

export const Gitstat = () => {
  return (
    <section className="gitstat-section">
      <h2 className="section__title different">
        GitHub Statistics
      </h2>

      <div className="gitstat-container">
        <div className="gitstat-card" id="github-streak-stats">
          <a
            href="https://github.com/manish9427"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://streak-stats.demolab.com/?user=manish9427"
              alt="Manish Verma GitHub streak statistics"
            />
          </a>
        </div>
      </div>
    </section>
  );
};