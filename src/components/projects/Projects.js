import React from "react";
import "./Projects.css";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      drag="x"
      dragConstraints={{ left: -1000, right: 0 }}
    >
      <div className="project-item" id="project1"></div>
      <div className="project-item" id="project2"></div>
      <div className="project-item" id="project3"></div>
      <div className="project-item" id="project4"></div>
      <div className="project-item" id="project5"></div>
      <div className="project-item" id="project6"></div>
      <div className="project-item" id="project7"></div>
    </motion.div>
  );
};

export default Projects;
