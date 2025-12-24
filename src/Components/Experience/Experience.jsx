import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './Experience.css';
import One from "../../assets/images/One.jpg";
import Two from "../../assets/images/Two.jpg";
import Three from "../../assets/images/Three.jpg";
import Four from "../../assets/images/Four.jpg";
import Five from "../../assets/images/Five.png";
import ImageContainer from "../ImageContainer/ImageContainer";

const images = [
    {
        src: One,
        title: "A-STEP & CUADS Tutor",
        subtitle: "Business Calculations (Statistics)",
        date: "June 2024 – October 2024"
    },
    {
        src: Two,
        title: "1st year and 3rd year overall Top Achiever ",
        subtitle: "University of the Free State",
        date: "October 2022 & September 2024"
    },
    {
        src: Three,
        title: "BSc in Computer Science",
        subtitle: "University of the Free State",
        date: "February 2022 – November 2024"
    },
    {
        src: Four,
        title: "Data Analyst Trainee",
        subtitle: "Auditor-General South Africa | Pretoria",
        date: "April 2025 – Present"
    },
    {
        src: Five,
        title: "BSc (Hons) in Computer Science",
        subtitle: "University of Pretoria",
        date: "Starting February 2026"
    }
];


const Experience = () => {
    const sectionRef = useRef(null);
    const elementsRef = useRef([]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"] // scroll mapped to full section
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    // IntersectionObserver for text animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.3 }
        );

        elementsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="carousel-section" ref={sectionRef}>
            <h4
                ref={el => elementsRef.current[0] = el}
                className="experience-title animatable animate-delay-0"
            >
                &lt;my career /&gt;
            </h4>

            <h4
                ref={el => elementsRef.current[1] = el}
                className="experience-subtitle animatable animate-delay-1"
            >
                WHERE HAVE I BEEN?
                <br /><br /><span className="experience-subtitle-note">
                    A quick timeline of where I’ve learned, worked, grown, and occasionally figured things out the hard way.
                </span>
            </h4>


            <motion.div
                className="sticky-container"
                style={{ x }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                {images.map((img, i) => (
                    <ImageContainer
                        key={i}
                        imageSource={img.src}
                        title={img.title}
                        subtitle={img.subtitle}
                        date={img.date}
                    />
                ))}
            </motion.div>

        </section>
    );
};

export default Experience;
