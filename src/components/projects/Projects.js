import React from "react";
import "./Projects.css";
import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import boxedOff1 from "../../assets/boxedOffEg.png";
import boxedOff2 from "../../assets/boxedOffEg2.png";
import githubwhite from "../../assets/github-mark-white.png";
import githubblack from "../../assets/github-logo.png";

const Projects = () => {
  const [mouseHover, setMouseHover] = useState();
  const logoBlack = () => {
    setMouseHover(true);
  };
  const logoWhite = () => {
    setMouseHover(false);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="project-item" id="project1">
        <div className="project-text">
          <h3>Boxed Off</h3>
          <p>A collaborative full PERN stack Family Management app</p>
          <h4>Features</h4>
          <ul>
            <li>App engaging UI/UX & Simple, consistent interface</li>
            <li>Netflix User selection for single device use.</li>
            <li>Hashed passwords & JWT security protected</li>
            <li>
              SQL database with structured data and predefined relationships
            </li>
            <li>Admin protected rendering for family administrator</li>
            <li>JWT on login user and BCRYPT password hash</li>
          </ul>
          <div className="project-buttons">
            <button
              onMouseEnter={() => logoBlack()}
              onMouseLeave={() => logoWhite()}
              className="code-button"
            >
              Code{" "}
              <img
                src={mouseHover ? githubblack : githubwhite}
                className="code"
              />
            </button>
            <button className="launch-button">Launch Project</button>
          </div>
        </div>

        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div>

      <div className="project-item" id="project2">
        <div className="project-text">
          <h3>Cats for Life</h3>
          <p>A collaborative ecommerce React app</p>
          <h4>Features</h4>
          <ul>
            <li>Random API generated cat ecommerce clone</li>
            <li>Faker API genrated info tied to cat API Object</li>
            <li>Modals</li>

            <li>Admin protected rendering for family administrator</li>
          </ul>
          <div className="project-buttons">
            <button
              onMouseEnter={() => logoBlack()}
              onMouseLeave={() => logoWhite()}
              className="code-button"
            >
              Code{" "}
              <img
                src={mouseHover ? githubblack : githubwhite}
                className="code"
              />
            </button>
            <button className="launch-button">Launch Project</button>
          </div>
        </div>

        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div>
      <div className="project-item" id="project3"></div>
      <div className="project-item" id="project4"></div>
      <div className="project-item" id="project5"></div>
      <div className="project-item" id="project6"></div>
      <div className="project-item" id="project7"></div>
    </div>
  );
};

export default Projects;
