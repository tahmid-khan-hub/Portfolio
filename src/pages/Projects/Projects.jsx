import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NexUScore",
    image: "https://i.ibb.co/GQNr15J2/image.png",
    url: "https://effervescent-centaur-5a4b64.netlify.app",
    technologies: [
      "React",
      "Tailwind",
      "CSS",
      "MongoDB",
      "Firebase",
      "JWT Token",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "EventExplorar",
    image: "https://i.ibb.co/6jJhcgC/image.png",
    url: "http://sprightly-torte-9a8d5c.netlify.app",
    technologies: ["React", "Tailwind", "CSS", "Firebase"],
  },
  {
    title: "RecipeBook",
    image: "https://i.ibb.co/v6d1rKdF/image.png",
    url: "https://amazing-crepe-4d717c.netlify.app",
    technologies: [
      "React",
      "Tailwind",
      "CSS",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Express",
    ],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="py-20 my-24 text-gray-800 ">
      <div className="">
        <h2 className="text-4xl font-bold text-center text-lime-500 mb-16">
          My Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              data-aos="zoom-out"
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-3 shadow-md shadow-lime-500 hover:shadow-lg hover:shadow-lime-500 transition duration-300 border border-lime-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 h-60 object-cover rounded-xl"
                // onError={(e) =>
                //   (e.target.src =
                //     "https://via.placeholder.com/500x300.png?text=Project+Image")
                // }
              />

              <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  Technologies:
                </p>
                <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-lime-200 text-lime-700 px-3 py-2 rounded-full text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={project.url}
                  target="_blank"
                  whileHover={{scale: 1.05}}
                  //   rel="noopener noreferrer"
                  className="inline-block rounded-xl py-2 my-4 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                >
                  View Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
