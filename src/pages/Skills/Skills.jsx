import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-600 text-5xl" />,
    bg: "bg-[#ffe8e0]",
    shimmer: "from-orange-300 via-pink-300 to-orange-300",
    shadow: "hover:shadow-orange-200",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    bg: "bg-[#e0f1ff]",
    shimmer: "from-blue-300 via-cyan-300 to-blue-300",
    shadow: "hover:shadow-blue-300",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500 text-5xl" />,
    bg: "bg-[#e0faff]",
    shimmer: "from-cyan-300 via-cyan-200 to-cyan-300",
    shadow: "hover:shadow-blue-100",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-5xl" />,
    bg: "bg-[#fff9e0]",
    shimmer: "from-yellow-300 via-yellow-200 to-yellow-300",
    shadow: "hover:shadow-yellow-100",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-500 text-5xl" />,
    bg: "bg-[#e0f7ff]",
    shimmer: "from-blue-300 via-cyan-300 to-blue-300",
    shadow: "hover:shadow-blue-200",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-5xl" />,
    bg: "bg-[#fff4e0]",
    shimmer: "from-yellow-300 via-orange-300 to-yellow-300",
    shadow: "hover:shadow-orange-100",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 text-5xl" />,
    bg: "bg-[#f0f0f0]",
    shimmer: "from-gray-300 via-gray-200 to-gray-300",
    shadow: "hover:shadow-red-100",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-5xl" />,
    bg: "bg-[#e0ffe8]",
    shimmer: "from-green-300 via-green-200 to-green-300",
    shadow: "hover:shadow-green-300",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-700 text-5xl" />,
    bg: "bg-[#eaffea]",
    shimmer: "from-lime-300 via-green-200 to-lime-300",
    shadow: "hover:shadow-green-200",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-lime-500">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Technologies I’ve learned so far — each contributing to my journey as
          a full-stack developer.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2 }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            // viewport={{ once: true }}
            className={`relative rounded-2xl p-8 overflow-hidden shadow-md hover:shadow-xl transition duration-300 ${skill.bg} text-center ${skill.shadow}`}
          >
            {/* Full shimmer overlay */}
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 4,
                ease: "linear",
              }}
              className={`absolute inset-0 bg-gradient-to-r ${skill.shimmer} opacity-10 pointer-events-none rotate-12`}
            />

            <div className="relative z-10 flex flex-col items-center justify-center gap-3">
              {skill.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
