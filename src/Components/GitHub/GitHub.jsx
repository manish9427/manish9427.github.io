import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";

const GitHub = () => {
  return (
    <section className="github-section">
      <h2 className="section__title different">DAYS I CODE</h2>

      <div className="github_Calender">
        <GitHubCalendar
          username="manish9427"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </section>
  );
};

export default GitHub;
