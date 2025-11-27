import React from "react";
import "./Projects.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Computer from "../Models/Computer"; // 3D model

// Import local images
import PortfolioImg from "../../assets/images/Portfolio.png";
import DataCleanerImg from "../../assets/images/DataCleaner.png";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      subtitle: "Frontend UI",
      description: "A personal portfolio website built with React, showcasing projects and skills.",
      image: PortfolioImg,
    },
    {
      title: "Data Cleaner",
      subtitle: "Python & Streamlit",
      description: "A desktop data cleaning tool made with Python and Streamlit for preprocessing datasets.",
      image: DataCleanerImg,
    },
    {
      title: "Upcoming Project",
      subtitle: "Coming Soon",
      description: "A project in the works, details will be added soon.",
      image: "https://via.placeholder.com/300x200", // URL string works now
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">&lt;projects /&gt;</h2>
      <h3 className="projects-subtitle">WHAT I’VE BUILT</h3>

      <div className="projects-container">
        {/* Left Column: Projects */}
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div className={`project-card card-${index + 1}`} key={index}>
              <img src={proj.image} alt={proj.title} />
              <h4>{proj.title}</h4>
              <h5>{proj.subtitle}</h5>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column: 3D Computer */}
        <div className="projects-3d">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={6} />
            <Computer
              scale={0.16}
              position={[0.2, -0.3, 0]}
              rotation={[0.4, Math.PI / 10, 0]}
            />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.6}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Projects;
