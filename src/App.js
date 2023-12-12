import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import cbl from "./assets/cbl.svg";
import cbr from "./assets/cbr.svg";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.scss";
function App() {
  const { ref: myRef, inView: visibleComponents } = useInView();
  const { ref: bracketRef, inView: openBrackets } = useInView();

  // const myRef = useRef();

  // const [visibleComponents, setVisibleComponents] = useState();
  // console.log("visibleComponents", visibleComponents);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisibleComponents(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <div className="App">
      <Header />
      <h1 className="name">Jake Meyer</h1>
      <div className="brackets">
        <img src={cbl} alt="Curly left bracket" />
        <div
          className={visibleComponents ? "inbetween-transition" : ""}
          // style={visibleComponents ? { width: "100%" } : { width: "10%" }}
        ></div>

        <img
          src={cbr}
          alt="Curly right bracket"
          className={visibleComponents ? "transition-lb" : ""}
        />
      </div>
      <section className="bracket-section" ref={myRef}>
        <About />

        <Projects />
      </section>

      <Contact />
    </div>
  );
}

export default App;
