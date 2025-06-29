import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="space-y-3 py-24 mt-1 text-gray-800">
      <h2 className="text-4xl text-center sm:text-4xl font-bold text-lime-500 dark:text-lime-400 mb-11">
        Education
      </h2>
      <div
        data-aos="fade-up"
        className="bg-lime-100 border rounded-xl border-gray-300 shadow py-12 px-4"
      >
        <h3 className="text-xl font-semibold">
          BSc in Computer Science & Engineering
        </h3>
        <p className="text-base">Metropolitan University, Sylhet, Bangladesh</p>
        <p className="text-sm text-gray-500 italic">2023 – 2027 (Expected)</p>
        <p className="mt-2 text-base">
          I'm currently pursuing my Bachelor's degree with a focus on web
          development and problem-solving. I actively build full-stack projects
          using the MERN stack and continuously improve my skills through
          hands-on learning.
        </p>
      </div>
    </div>
  );
};

export default Education;
