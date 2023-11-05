import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="gitHub-link m-3">
        <small>
          This project was coded by{" "}
          <a
            href="www.linkedin.com/in/tetiana-taranova-28b010208"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tetiana Taranova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Tetiana977/react-weather-project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-project-by-tetiana.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </small>
      </div>
    </div>
  );
}
