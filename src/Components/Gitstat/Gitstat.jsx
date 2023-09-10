import React from "react";
import "../Gitstat/Gitstat.css";

export const Gitstat = () => {
  return (
    <div>
      <div className="box1" id="github-streak-stats">
        <a href="https://github.com/manish9427">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=manish9427"
            alt="streak"
          />
        </a>
      </div>

      <div className="box2" id="github-top-langs">
        <a href="https://github.com/manish9427">
          <img
            align="center"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=manish9427"
            alt="stats"
          />
        </a>
        <a href="https://github.com/manish9427">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=manish9427&count_private=true&show_icons=true"
            alt="stats"
          />
        </a>
      </div>
    </div>
  );
};
