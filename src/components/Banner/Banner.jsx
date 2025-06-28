import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../../assets/myImage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-24 py-24">
      {/* Left Side: Text */}
      <div className="flex-1 ml-0 md:ml-2" data-aos="fade-right">
        <h1
          data-aos="fade-right"
          className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left"
        >
          Hi, I'm <span className="text-lime-500">Tahmid</span>
        </h1>

        <TypeAnimation
          sequence={[
            "A MERN Stack Developer",
            2000,
            "A React.js Enthusiast",
            2000,
            "A Problem Solver",
            2000,
            "A Student",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-gray-500 mb-6 text-center md:text-left"
        />

        <p
          data-aos="fade-right"
          className="text-base md:text-lg text-gray-500 mb-3 max-w-xl text-center md:text-left"
        >
          I'm a university student who builds responsive and user-friendly websites using modern web technologies.
        </p>

        <div className="flex justify-center items-center md:justify-start mb-3">
          <a href="https://github.com/tahmid-khan-hub" target="_blank"><FaGithub size={35} /></a>
          <a href="https://www.facebook.com/tahmid.khan.35762241" target="_blank"><FaFacebook className="text-blue-500 ml-3" size={35}/></a>
        </div>

        <div
          data-aos="fade-right"
          className="flex justify-center items-center gap-4  md:justify-start"
        >
          
          <motion.a whileHover={{scale: 1.05}} className="btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300">
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Right Side: Image with floating animation */}
      <motion.div
        className="flex-1 flex justify-center"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img
          src={profileImg}
          alt="Tahmid"
          className="w-72 h-72 md:w-[350px] md:h-[350px] rounded-full object-cover border-4 border-lime-500 shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
