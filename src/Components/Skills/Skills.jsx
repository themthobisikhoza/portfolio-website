import { useEffect, useRef } from "react";
import React from "react";
import "./Skills.css";

// Import your PNG logos
import githubLogo from "../../assets/icons/github-sd.png";
import jsLogo from "../../assets/icons/js.png";
import csharpLogo from "../../assets/icons/c-sharp.png";
import databaseLogo from "../../assets/icons/database.png";
import reactLogo from "../../assets/icons/physics.png"; // React icon
import javaLogo from "../../assets/icons/java.png";
import pythonLogo from "../../assets/icons/python.png";
import cssLogo from "../../assets/icons/css.png";
import gitLogo from "../../assets/icons/git.png";
import powerAppsLogo from "../../assets/icons/power-apps.png";
import powerAutomateLogo from "../../assets/icons/power-automate.png";
import powerBiLogo from "../../assets/icons/power-bi.png";
import tableauLogo from "../../assets/icons/tableau.png";
import jupyterLogo from "../../assets/icons/jupyter.png";
import sparkLogo from "../../assets/icons/apache-spark.png";

const Skills = () => {
    const animRefs = useRef([]);

    // Particle Background setup
    useEffect(() => {
        const canvas = document.getElementById("skills-bg");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 120;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = "#0cc0df";
                ctx.fill();

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // IntersectionObserver for card animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.2 }
        );

        animRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Skills data with logos and descriptions
    const skills = [
        {
            title: "Frontend",
            logos: [reactLogo, jsLogo, cssLogo],
            description:
                "I craft engaging, responsive interfaces using React, JavaScript, and CSS. My frontend work focuses on modern UI/UX principles, delivering intuitive and visually appealing applications. From animations to accessibility, I make sure every detail feels polished and user-friendly.",
        },
        {
            title: "Backend",
            logos: [javaLogo, csharpLogo, pythonLogo, databaseLogo],
            description:
                "I design and build scalable backends, APIs, and robust database systems. Experienced with Java, C#, Python, and SQL, I ensure security, maintainability, and efficiency in every project. My approach emphasizes clean architecture, optimized queries, and strong integration between services.",
        },
        {
            title: "Data & Analytics",
            logos: [powerBiLogo, tableauLogo, jupyterLogo, sparkLogo],
            description:
                "I specialize in transforming raw data into actionable insights using Power BI, Tableau, Jupyter, and PySpark. From building dashboards to running advanced analytics, I help teams make informed decisions. My focus is on clarity, accuracy, and scalable solutions for complex datasets.",
        },
        {
            title: "Tools & Collaboration",
            logos: [githubLogo, gitLogo, powerAppsLogo, powerAutomateLogo],
            description:
                "I thrive in collaborative environments using Git/GitHub for version control, Power Platform tools for automation, and agile practices to drive productivity. My toolkit ensures projects run smoothly from planning to deployment, with strong emphasis on teamwork and continuous improvement.",
        },
    ];

    // Render Skills Section
    return (
        <div className="skills-section" id="skills">
            {/* Particle Background Canvas */}
            <canvas id="skills-bg" className="skills-bg"></canvas>

            {/* Section title & subtitle */}
            <h2
                className="skills-title animatable"
                ref={(el) => (animRefs.current[0] = el)}
            >
                &lt;skills & expertise /&gt;
            </h2>
            <h2
                className="skills-subtitle animatable"
                ref={(el) => (animRefs.current[1] = el)}
            >
                WHAT CAN I DO?
            </h2>

            {/* Skills Grid */}
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        className={`skill-card animatable delay-${index}`}
                        key={index}
                        ref={(el) => (animRefs.current[index + 2] = el)}
                    >
                        {/* Logos */}
                        <div className="logos">
                            {skill.logos.map((logo, idx) => (
                                <img src={logo} alt="tech-logo" key={idx} />
                            ))}
                        </div>

                        {/* Title & Description */}
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
