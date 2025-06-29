import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProjectsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data[parseInt(id)];
        setProject(selected);
      });
  }, [id]);

  if (!project) {
    return (
      <div className="text-center mt-20 text-xl">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:max-w-[1460px] mx-auto mt-8 mb-12">
      <button
        onClick={() => navigate(-1)}
        className="btn bg-gradient-to-r from-lime-400 via-lime-500 to-lime-500 hover:bg-gradient-to-l hover:from-lime-300 hover:via-lime-400 hover:to-lime-400 border-2 border-lime-300 mb-6"
      >
        ← Back
      </button>

      <div className="bg-lime-100 border border-gray-400 p-6 rounded-xl shadow-xl">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-center">{project.title}</h1>
        {/* Image or Carousel */}
        <div className="w-full h-[210px] md:h-[320px] lg:h-[540px] mb-6">
          {project.image?.length > 0 ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              className="w-full h-full rounded-lg"
            >
              {project.image.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Description */}
        <h2 className="text-xl font-semibold -ml-1 mb-2">📄 Description:</h2>
        <p className="text-lg mb-6 text-gray-800">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🔧 Features:</h2>
          <ul className="list-disc list-inside ml-2 space-y-1 text-gray-800">
            {["fea1", "fea2", "fea3", "fea4", "fea5", "fea6"]
              .filter((key) => project[key])
              .map((key) => (
                <li key={key}>{project[key]}</li>
              ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">💻 Technologies Used:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-lime-300 text-gray-800 px-3 py-2 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🚧 Challenges I Faced:</h2>
          <p className="text-gray-800">{project.challenges}</p>
        </div>

        {/* What I Learned */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📘 What I Learned:</h2>
          <p className="text-gray-800">{project.whatILearned}</p>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🚀 Future Plans:</h2>
          <p className="text-gray-800">{project.futurePlans}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectsDetails;
