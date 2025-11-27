import React, { useEffect, useRef } from "react";
import "./Projects.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Computer from "../Models/Computer"; // 3D model

import PortfolioImg from "../../assets/images/Portfolio.png";
import DataCleanerImg from "../../assets/images/DataCleaner.png";
import ConstructionImg from "../../assets/images/Construction.jpg";

const Projects = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate'); // remove to allow re-trigger
                    }
                });
            },
            { threshold: 0.2 }
        );

        projectRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "Portfolio Website",
            subtitle: "Frontend UI",
            description: "A personal portfolio website built with React, showcasing projects and skills.",
            image: PortfolioImg,
            languages: ["React", "R3F", "CSS", "JavaScript"],
        },
        {
            title: "Data Cleaner",
            subtitle: "Python & Streamlit",
            description: "A desktop data cleaning tool made with Python and Streamlit for preprocessing datasets.",
            image: DataCleanerImg,
            languages: ["Python", "Streamlit", "Pandas"],
        },
        {
            title: "Upcoming Project",
            subtitle: "Coming Soon",
            description: "A project in the works, details will be added soon.",
            image: ConstructionImg,
            languages: ["TBA"],
        },
    ];

    return (
        <div className="projects-section" id="projects">
            <h2
                ref={el => projectRefs.current[0] = el}
                className="projects-title animatable animate-delay-0"
            >
                &lt;projects /&gt;
            </h2>
            <h3
                ref={el => projectRefs.current[1] = el}
                className="projects-subtitle animatable animate-delay-1"
            >
                WHAT I’VE BUILT
            </h3>

            <div className="projects-container">
                <div className="projects-grid">
                    {projects.map((proj, index) => (
                        <div
                            key={index}
                            ref={el => projectRefs.current[index + 2] = el}
                            className={`project-card card-${index + 1} animatable animate-delay-${index}`}
                        >
                            <img src={proj.image} alt={proj.title} />

                            <div className="project-languages">
                                {proj.languages.map((lang, i) => (
                                    <span key={i} className="language-pill">{lang}</span>
                                ))}
                            </div>

                            <h4>{proj.title}</h4>
                            <h5>{proj.subtitle}</h5>
                            <p>{proj.description}</p>
                        </div>
                    ))}
                </div>

                <div
                    ref={el => projectRefs.current[5] = el}
                    className="projects-3d animatable animate-delay-4"
                >
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
