import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

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

  if (!project) return <div className="text-center mt-20 text-xl">Loading...</div>;

  return (
    <div className="w-[95%] md:max-w-[1200px] mx-auto mt-8 mb-12 px-4">
      <button onClick={() => navigate(-1)} className="btn btn-outline mb-6">
        ← Back
      </button>

      <div className="bg-base-100 p-6 rounded-2xl shadow-xl">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-center">{project.title}</h1>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg mb-6 shadow-lg"
        />

        {/* Description */}
        <p className="text-lg mb-6 text-gray-700">{project.description}</p>

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
          <h2 className="text-xl font-semibold mb-2">💻 Technologies Used:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-sm px-3 py-1 rounded-full border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🚧 Challenges Faced:</h2>
          <p className="text-gray-700">{project.challenges}</p>
        </div>

        {/* What I Learned */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📘 What I Learned:</h2>
          <p className="text-gray-700">{project.whatILearned}</p>
        </div>

        {/* Future Plans */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🚀 Future Plans:</h2>
          <p className="text-gray-700">{project.futurePlans}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
