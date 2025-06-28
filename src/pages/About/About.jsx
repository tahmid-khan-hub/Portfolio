import React, { useEffect } from "react";
import Lottie from "lottie-react";
import devAnimation from "../../assets/LottieFiles/dev.json";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section id="about" className="w-full overflow-x-hidden py-16">
      <div className=" grid md:grid-cols-2 items-center gap-10">
        {/* Animation */}
        <div className="w-full">
          <Lottie animationData={devAnimation} loop={true} />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-gray-600 px-1">
          <h2
            data-aos="fade-left"
            className="text-3xl sm:text-4xl font-bold text-lime-600 dark:text-lime-400 text-center md:text-left"
          >
            About Me
          </h2>
          <p data-aos="fade-left" className="text-lg leading-relaxed">
            I'm a passionate{" "}
            <span className="font-bold">MERN stack developer</span> who loves
            building efficient, scalable, and modern web applications.
          </p>
          <p data-aos="fade-left" className="text-lg -mt-6">
            Currently, I'm pursuing a degree in{" "}
            <span className="font-bold">Computer Science & Engineering</span> at{" "}
            <span className="font-bold">Metropolitan University</span>, located in <span className="font-bold">Sylhet, Bangladesh</span>.
          </p>
          <p data-aos="fade-left" className="text-lg">
            I enjoy solving complex problems and continuously learning...
          </p>
          <ul data-aos="fade-left" className="list-disc list-inside text-base">
            <li>
              Built <strong className="font-bold">3 full-stack MERN</strong>{" "}
              projects
            </li>
            <li>
              Focused on{" "}
              <strong className="font-bold">
                web performance optimization
              </strong>
            </li>
            <li>
              Strong{" "}
              <strong className="font-bold">problem-solving skills</strong>
            </li>
          </ul>
          <blockquote
            data-aos="fade-left"
            className="italic text-lime-500 dark:text-lime-600 border-l-4 border-lime-400 pl-4"
          >
            "Turning ideas into scalable solutions — one line of code at a
            time."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
