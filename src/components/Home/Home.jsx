import React from "react";
import Banner from "../Banner/Banner";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";

const Home = () => {
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
