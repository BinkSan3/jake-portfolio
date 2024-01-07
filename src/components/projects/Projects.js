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
            <a
              href="https://github.com/BinkSan3/familyManagementFrontEnd"
              target="blank"
            >
              <button
                onMouseEnter={() => logoBlack()}
                onMouseLeave={() => logoWhite()}
                className="code-button"
              >
                FrontEnd Code{" "}
                <img
                  src={mouseHover ? githubblack : githubwhite}
                  className="code"
                />
              </button>
            </a>
            <a
              href="https://github.com/BinkSan3/familyManagementBackEnd"
              target="blank"
            >
              <button
                onMouseEnter={() => logoBlack()}
                onMouseLeave={() => logoWhite()}
                className="code-button"
              >
                BackEnd Code{" "}
                <img
                  src={mouseHover ? githubblack : githubwhite}
                  className="code"
                />
              </button>
            </a>
            <a
              href="https://family-management-front-end.vercel.app/"
              target="blank"
            >
              <button className="launch-button">Launch Project</button>
            </a>
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
            <li>Random API generated cat ecommerce front end</li>
            <li>Use of spread operator to tie random info to cat API Object</li>
            <li>Modals and functioning shopping cart</li>
          </ul>
          <div className="project-buttons">
            <a href="https://github.com/BinkSan3/catsforLife" target="blank">
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
            </a>
            <a href="https://cats-for-life.vercel.app/" target="blank">
              {" "}
              <button className="launch-button">Launch Project</button>
            </a>
          </div>
        </div>

        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div>
      <div className="project-item" id="project3">
        <div className="project-text">
          <h3>Back end</h3>
          <p>MYSQL & MongoDB exercises</p>
          <h4>Features</h4>
          <ul>
            <li>Random API generated cat ecommerce clone</li>
            <li>Faker API genrated info tied to cat API Object</li>
            <li>Modals</li>

            <li>Admin protected rendering for family administrator</li>
          </ul>
          <div className="project-buttons">
            <a href="https://github.com/BinkSan3/m51week9" target="blank">
              <button
                onMouseEnter={() => logoBlack()}
                onMouseLeave={() => logoWhite()}
                className="code-button"
              >
                MYSQL{" "}
                <img
                  src={mouseHover ? githubblack : githubwhite}
                  className="code"
                />
              </button>
            </a>
            <a href="https://github.com/BinkSan3/week7" target="blank">
              <button
                onMouseEnter={() => logoBlack()}
                onMouseLeave={() => logoWhite()}
                className="code-button"
              >
                MongoDB{" "}
                <img
                  src={mouseHover ? githubblack : githubwhite}
                  className="code"
                />
              </button>
            </a>
          </div>
        </div>

        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div>
      <div className="project-item" id="project4">
        <div className="project-text">
          <h3>Cyber Pet</h3>
          <p>Create a Cyber pet game app with Object Oriented Programming.</p>
          <h4>Features</h4>
          <ul>
            <li>
              generic Animal class and unique subclasses for each specific
              animal
            </li>
            <li>Properties and Methods unique to each animal</li>
            <li>Display decreasing stats over time</li>

            <li>
              Buttons for each method Feed/Play etc. that changes the stats of
              cyberpet
            </li>
          </ul>
          <div className="project-buttons">
            <a href="https://github.com/BinkSan3/cyberPet" target="_blank">
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
            </a>
            <a href="https://binksan3.github.io/cyberPet/" target="blank">
              <button className="launch-button">Launch Project</button>
            </a>
          </div>
        </div>
        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div>
      <div className="project-item" id="project5">
        <div className="project-text">
          <h3>JavaScript Projects</h3>
          <p>A series of small day projects</p>
          <h4>Features</h4>
          <ul>
            <li>Ignore Intro</li>
            <li>Keycode challenge. Hold any key down to get keycode info</li>
            <li>Drum Kit Challenge. Click & keyboard</li>

            <li>Dice Game. Get to 20 to win. Roll a 1 you lose.</li>
            <li>
              2 player dice game. Same rules but you can hold number and pass go
            </li>
          </ul>
          <div className="project-buttons">
            <a href="https://github.com/BinkSan3/week3" target="_blank">
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
            </a>
            <a href="https://binksan3.github.io/week3/" target="blank">
              <button className="launch-button">Launch Project</button>
            </a>
          </div>
        </div>
        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div>

      <div className="project-item" id="project6">
        <div className="project-text">
          <h3>To Do list</h3>
          <p>
            Test your react skills in mapping data out, managing state and
            receiving user input.
          </p>
          <h4>Features</h4>
          <ul>
            <li>Add items to the list</li>
            <li>Check items as done</li>
            <li>Archive to hidden List</li>

            <li>Delete Permanently</li>
          </ul>
          <div className="project-buttons">
            <a
              href="https://github.com/BinkSan3/toDoListProject/blob/main/src/App.js"
              target="_blank"
            >
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
            </a>
            <a
              href="https://to-do-list-project-azure.vercel.app/"
              target="blank"
            >
              <button className="launch-button">Launch Project</button>
            </a>
          </div>
        </div>
        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div>
      {/* <div className="project-item" id="project7">
        <div className="project-text">
          <h3>Calculator</h3>
          <p>Create a functional calculator using a 3rd party package</p>
          <h4>Features</h4>
          <ul>
            <li>Random API generated cat ecommerce clone</li>
            <li>Faker API genrated info tied to cat API Object</li>
            <li>Modals</li>

            <li>Admin protected rendering for family administrator</li>
          </ul>
          <div className="project-buttons">
            <a href="https://github.com/BinkSan3/calculatorApp" target="_blank">
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
            </a>
            <a
              href="https://calculator-app-wine-nine.vercel.app/"
              target="blank"
            >
              <button className="launch-button">Launch Project</button>
            </a>
          </div>
        </div>
        <div className="project-images">
          <img src={boxedOff1} className="project-image" />
          <img src={boxedOff2} className="project-image" />
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
