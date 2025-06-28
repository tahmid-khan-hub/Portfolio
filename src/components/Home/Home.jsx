import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import Education from "../../pages/Education/Education";

const Home = () => {
  useEffect(()=>{document.title = "Portfolio"},[])
  return (
    <div className="overflow-x-hidden">
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
