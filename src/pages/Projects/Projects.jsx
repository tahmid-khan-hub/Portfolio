import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    title: "ThreadQube",
    images: [
      "https://i.ibb.co.com/rKWWk7Fr/thread-banner.png",
      "https://i.ibb.co.com/xSwrqGqh/thread-dashboard.png",
      "https://i.ibb.co.com/ZpKqqZGy/thread-manage-User.png",
    ],
    description:
      "ThreadQube is a MERN-based forum that lets users share and engage with posts, with premium options and clear admin management. It supports easy discussions while keeping the community connected and moderated.",
    url: "https://thread-qube-app.netlify.app",
    fea1: "Users can create, delete and interact with posts by liking, disliking and commenting.",
    fea2: "Unlock extended posting limits and extra features through secure payment.",
    fea3: "Admins can manage announcements, user roles and platform policies to keep the forum organized.",
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "JWT Token",
      "Node.js",
      "Express.js",
      "Stripe",
      "Tan Stack Query",
      "React hook form",
    ],
    gitHub_client: "https://github.com/tahmid-khan-hub/Thread-Qube",
    gitHub_server: "https://github.com/tahmid-khan-hub/Thread-Qube-Server",
  },
  {
    title: "NexUScore",
    images: [
      "https://i.ibb.co/sdkNqSz6/image.png",
      "https://i.ibb.co/LhgjdyLS/image.png",
      "https://i.ibb.co/ks9QsQTD/image.png",
    ],
    description:
      "NexUSCore is an educational platform where users can explore and enroll in a variety of courses. Enroll in your desired courses and level up your skills on your schedule.",
    url: "https://nexuscore-app.netlify.app",
    fea1: "Access the most popular and newly added courses",
    fea2: "Easily explore courses by topic or interest",
    fea3: "Track your progress and manage all your enrolled courses",
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "JWT Token",
      "Node.js",
      "Express.js",
      "Stripe",
    ],
    gitHub_server: "https://github.com/tahmid-khan-hub/NexUsCore-server",
    gitHub_client: "https://github.com/tahmid-khan-hub/Nexus-Core",
  },

  {
    title: "EventExplorar",
    images: [
      "https://i.ibb.co/6jJhcgC/image.png",
      "https://i.ibb.co/gFmmhhLv/image.png",
      "https://i.ibb.co/PZKNcNhb/image.png",
    ],
    description:
      "EventExplorar helps you discover and enjoy events around you with ease and excitement. Stay updated on upcoming programs, workshops, and festivals tailored to your interests.",
    url: "http://sprightly-torte-9a8d5c.netlify.app",
    fea1: "Find events across various categories",
    fea2: "View full event descriptions, schedules and locations",
    fea3: "Keep track of your booked events",
    technologies: ["React.js", "Tailwind", "JavaScript", "CSS", "Firebase"],
    gitHub_client: "https://github.com/tahmid-khan-hub/Event-Explorar",
  },
  {
    title: "RecipeBook",
    images: [
      "https://i.ibb.co/v6d1rKdF/image.png",
      "https://i.ibb.co/zHrm7pT3/image.png",
      "https://i.ibb.co/Z6htKd0g/image.png",
    ],
    description:
      "RecipeBook brings delicious recipes to your fingertips, making cooking easy and fun for everyone. Explore a wide range of recipes with step-by-step instructions and beautiful visuals.",
    url: "https://comforting-pasca-4e92c6.netlify.app/",
    fea1: "Create, edit, and organize personal recipes",
    fea2: "Explore shared recipes from other users",
    fea3: "Like your favorite recipes",
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Express.js",
    ],
    gitHub_server: "https://github.com/tahmid-khan-hub/Recipe-Book-Server",
    gitHub_client: "https://github.com/tahmid-khan-hub/Recipe-Book",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="projects" className="py-20 my-24 text-gray-800">
      <div>
        <h2 className="text-4xl font-bold text-center text-lime-500 mb-16">
          My Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              className="flex flex-col md:flex-row md:items-stretch gap-8 bg-white rounded-2xl p-3 mx-1 shadow-sm shadow-lime-500 border border-lime-500"
            >
              {/* LEFT: Swiper */}
              <div className="w-full md:w-[60%] self-stretch">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="h-full min-h-[380px] rounded-xl overflow-hidden"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i} className="h-full">
                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="block w-full h-full object-cover rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* RIGHT: details */}
              <div className="md:w-[40%] flex flex-col justify-between">
                {/* top content */}
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="px-3 md:px-1 lg:px-0">{project.description}</p>
                  <div className="font-semibold text-left ml-2 md:ml-1 lg:ml-0">
                    <li>{project.fea1}</li>
                    <li>{project.fea2}</li>
                    <li>{project.fea3}</li>
                  </div>
                  <p className="text-sm text-gray-600 font-medium mt-3 md:mt-1 lg:mt-0">
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
                </div>

                {/* bottom buttons */}
                <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-8 mt-4">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block rounded-xl py-2 my-2 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                  >
                    Live
                  </motion.a>
                  <motion.a
                    href={project.gitHub_client}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block rounded-xl py-2 my-2 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                  >
                    Client
                  </motion.a>
                  {project.gitHub_server && (
                    <motion.a
                      href={project.gitHub_server}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      className="inline-block rounded-xl py-2 my-2 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                    >
                      Server
                    </motion.a>
                  )}
                  <Link
                    className="inline-block rounded-xl py-2 my-2 btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300"
                    to={`projectsDetails/${index}`}
                  >
                    <motion.a whileHover={{ scale: 1.05 }}>Details</motion.a>
                  </Link>
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
