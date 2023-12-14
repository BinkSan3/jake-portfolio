import React from "react";
import "./Projects.css";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="project-item" id="project1"></div>
      <div className="project-item" id="project2"></div>
      <div className="project-item" id="project3"></div>
      <div className="project-item" id="project4"></div>
      <div className="project-item" id="project5"></div>
      <div className="project-item" id="project6"></div>
      <div className="project-item" id="project7"></div>
    </div>
  );
};

export default Projects;
