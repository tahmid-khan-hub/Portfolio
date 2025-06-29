import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";

const projects = [
  {
    title: "NexUScore",
    image: "https://i.ibb.co/sdkNqSz6/image.png",
    description: "NexUSCore is an educational platform where users can explore and enroll in a variety of courses. Enroll in your desired courses and level up your skills on your schedule.",
    url: "https://effervescent-centaur-5a4b64.netlify.app",
    fea1: "Access the most popular and newly added courses",
    fea2: "Easily explore courses by topic or interest",
    fea3: "Track your progress and manage all your enrolled courses",
    technologies: [
      "React","Tailwind","CSS", "JavaScript","MongoDB","Firebase","JWT Token","Node.js","Express"],
    gitHub_server: "https://github.com/tahmid-khan-hub/NexUsCore-server",
    gitHub_client: "https://github.com/tahmid-khan-hub/Nexus-Core",
  },
  {
    title: "EventExplorar",
    image: "https://i.ibb.co/6jJhcgC/image.png",
    description: "EventExplorar helps you discover and enjoy events around you with ease and excitement. Stay updated on upcoming programs, workshops, and festivals tailored to your interests.",
    url: "http://sprightly-torte-9a8d5c.netlify.app",
    fea1: "Find events across various categories",
    fea2: "View full event descriptions, schedules and locations",
    fea3: "Keep track of your booked events",
    technologies: ["React", "Tailwind", "JavaScript", "CSS", "Firebase"],
    gitHub_client: "https://github.com/tahmid-khan-hub/Event-Explorar",
  },
  {
    title: "RecipeBook",
    image: "https://i.ibb.co/v6d1rKdF/image.png",
    description: "RecipeBook brings delicious recipes to your fingertips, making cooking easy and fun for everyone. Explore a wide range of recipes with step-by-step instructions and beautiful visuals.",
    url: "https://amazing-crepe-4d717c.netlify.app",
    fea1: "Create, edit, and organize personal recipes",
    fea2: "Explore shared recipes from other users",
    fea3: "Like your favorite dishes",
    technologies: [
      "React","Tailwind","CSS", "JavaScript", "MongoDB","Firebase","Node.js","Express",
    ],
    gitHub_server: "https://github.com/tahmid-khan-hub/Recipe-Book-Server",
    gitHub_client: "https://github.com/tahmid-khan-hub/Recipe-Book",
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
              data-aos="fade-up"
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-3 mx-1 shadow-md shadow-lime-500 hover:shadow-lg hover:shadow-lime-500 transition duration-300 border border-lime-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-[60%] h-[380px] object-cover rounded-xl"
                // onError={(e) =>
                //   (e.target.src =
                //     "https://via.placeholder.com/500x300.png?text=Project+Image")
                // }
              />

              <div className="md:w-[40%] space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div>
                  <li>{project.fea1}</li>
                  <li>{project.fea2}</li>
                  <li>{project.fea3}</li>
                </div>
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

                <div className="flex gap-8">
                  <motion.a
                  href={project.url}
                  target="_blank"
                  whileHover={{scale: 1.05}}
                  className="inline-block rounded-xl py-2 my-4 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                  >
                    Live
                  </motion.a>

                  <motion.a
                  href={project.gitHub_client}
                  target="_blank"
                  whileHover={{scale: 1.05}}
                  className="inline-block rounded-xl py-2 my-4 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                  >
                    GitHub Client
                  </motion.a>

                  {
                    project.gitHub_server && <motion.a
                      href={project.gitHub_server}
                      target="_blank"
                      whileHover={{scale: 1.05}}
                      className="inline-block rounded-xl py-2 my-4 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                      >
                        GitHub Server
                      </motion.a>
                  }

                  <Link to={`projectsDetails/${index}`}><motion.a
                  whileHover={{scale: 1.05}}
                  className="inline-block rounded-xl py-2 my-4 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                  >
                    View Details
                  </motion.a></Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
