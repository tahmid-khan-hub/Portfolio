import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FiSun , FiMoon } from "react-icons/fi";
import './Navbar.css'

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
      document.body.className = darkMode ? "dark" : "light"
    },[darkMode])

    const links = <>
        <NavLink className="mr-4" to="/"><li>Home</li></NavLink>
        <NavLink className="mr-4" to="/about"><li>About</li></NavLink>
        <NavLink className="mr-4" to="/skills"><li>Skills</li></NavLink>
        <NavLink className="mr-4" to="/projects"><li>Projects</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
    </>

  return (
    <div className="navbar ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {
            darkMode ? <FiSun size={25}></FiSun> : <FiMoon size={25}></FiMoon>
          }
        </a>
        <a className="btn ml-2">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
