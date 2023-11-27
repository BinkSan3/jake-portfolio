import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import cbl from "./assets/cbl.svg";
import cbr from "./assets/cbr.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="brackets">
        <img src={cbl} alt="Curly left bracket" />
        <img src={cbr} alt="Curly right bracket" />
      </div>
      <About />

      <section className="projects-section">
        <Projects />
      </section>

      <Contact />
    </div>
  );
}

export default App;
