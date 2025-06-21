import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../../assets/myImage.jpg';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16">
      
      {/* Left Side: Text */}
      <motion.div
        className="flex-1 pl-11"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-lime-600">Tahmid</span>
        </h1>

        <TypeAnimation
          sequence={[
            'A MERN Stack Developer',
            2000,
            'A React.js Enthusiast',
            2000,
            'A Problem Solver',
            2000,
            'A Student',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-gray-500 mb-6"
        />

        <p className="text-base md:text-lg text-gray-500 mb-6 max-w-xl">
          I build dynamic and responsive websites with modern technologies. Let's build something amazing together.
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="btn ">Hire Me</a>
          <a
            className="btn border-2"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

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