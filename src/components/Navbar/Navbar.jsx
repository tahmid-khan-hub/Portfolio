import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const links = (
    <>
      <li>
        <a className="mr-4 font-semibold hover:bg-lime-500 hover:text-black" href="#banner">
          Banner
        </a>
      </li>
      <li>
        <a className="mr-4 font-semibold hover:bg-lime-500 hover:text-black" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="mr-4 font-semibold hover:bg-lime-500 hover:text-black" href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a className="mr-4 font-semibold hover:bg-lime-500 hover:text-black" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="font-semibold hover:bg-lime-500 hover:text-black" href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar  text-lime-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lime-800">
            {links}
          </ul>
        </div>
        <a className="text-xl font-semibold ml-3">Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? <FiSun size={25} /> : <FiMoon size={25} />}
        </button>
       <Link to="resume"><motion.a whileHover={{scale: 1.05}} className="btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-l hover:from-lime-200 hover:via-lime-300 hover:to-lime-400 border-2 border-lime-300 ml-2">
          Resume
        </motion.a></Link>
      </div>
    </div>
  );
};

export default Navbar;
