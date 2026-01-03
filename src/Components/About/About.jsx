import React, { useEffect, useRef } from 'react';
import "./About.css";
import Portrait from '../../../src/assets/images/Portrait.png';

// Experience imports for scroll-based animations
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import One from "../../assets/images/One.jpg";
import Two from "../../assets/images/Two.jpg";
import Three from "../../assets/images/Three.jpg";
import Four from "../../assets/images/Four.jpg";
import Five from "../../assets/images/Five.png";
import ImageContainer from "../ImageContainer/ImageContainer";

// Array of experience images with metadata
const images = [
    {
        src: One,
        title: "A-STEP & CUADS Tutor",
        subtitle: "Business Calculations (Statistics)",
        date: "June 2024 – October 2024"
    },
    {
        src: Two,
        title: "1st year and 3rd year overall Top Achiever",
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

const About = () => {
    // Ref array for animatable elements
    const elementsRef = useRef([]);
    // Ref for the experience section container (used for horizontal scroll)
    const sectionRef = useRef(null);

    // Intersection Observer to trigger animations when elements are visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate'); // add active animation class
                    } else {
                        entry.target.classList.remove('animate'); // remove class when out of view
                    }
                });
            },
            { threshold: 0.2 } // trigger when 20% of the element is visible
        );

        // Observe each element in elementsRef
        elementsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    // Horizontal scroll logic for experience carousel
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const rawX = useTransform(scrollYProgress, [0.9, 1], ["0%", "-80%"]); // map vertical scroll to horizontal movement
    const x = useSpring(rawX, { stiffness: 15, damping: 40 }); // smooth motion using spring physics

    return (
        <>
            {/* ABOUT SECTION */}
            <div className='about-section' id="about">
                <div className='about-content'>
                    <div className="about-text-image">
                        <div className="about-text">
                            {/* About title */}
                            <h4
                                ref={el => elementsRef.current[0] = el}
                                className="about-title animatable animate-delay-0"
                            >
                                &lt;ABOUT ME /&gt;
                            </h4>

                            {/* About subtitle */}
                            <h4
                                ref={el => elementsRef.current[1] = el}
                                className="about-subtitle animatable animate-delay-1"
                            >
                                WHO AM I?
                            </h4>

                            {/* Main about text */}
                            <h1
                                ref={el => elementsRef.current[2] = el}
                                className="about-text animatable animate-delay-2"
                            >
                                I'm a <span className="glow-text">full-stack developer</span> based in Johannesburg, South Africa. Currently employed as a data analyst.
                                <br /><br />
                                My approach combines <span className='glow-text'>logic, creativity, and precision</span> to craft solutions that are both functional and visually engaging.
                            </h1>

                            {/* About subtext with humor */}
                            <p
                                ref={el => elementsRef.current[3] = el}
                                className="about-subtext animatable animate-delay-3"
                            >
                                <br />Whether I’m building responsive apps, fixing broken databases, or wrestling JavaScript into submission, I turn
                                <span className="glow-text"> coffee into software</span> and bugs into features.
                                <br /><br />
                                Hire me, not just because I’m <span className="glow-text">broke</span>, but because I’ll make your project run smoother than my WiFi on payday.
                            </p>
                        </div>

                        {/* Portrait image */}
                        <img
                            ref={el => elementsRef.current[4] = el}
                            src={Portrait}
                            alt="Portrait"
                            className="about-image animatable animate-delay-4"
                        />
                    </div>

                    {/* Buttons */}
                    <button
                        ref={el => elementsRef.current[5] = el}
                        className="round-outline-btn animatable animate-delay-5"
                    >
                        <a href="#projects" style={{ color: "inherit", textDecoration: "none" }}>
                            VIEW MY WORK
                        </a>
                    </button>

                    <button
                        ref={el => elementsRef.current[6] = el}
                        className="round-outline-btn animatable animate-delay-5"
                    >
                        <a
                            href="mailto:khozamthobisi7@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            CONTACT ME
                        </a>
                    </button>
                </div>
            </div>

            {/* EXPERIENCE SECTION */}
            <section className="carousel-section" ref={sectionRef}>
                {/* Experience section title */}
                <h4
                    ref={el => elementsRef.current[7] = el}
                    className="experience-title animatable animate-delay-0"
                >
                    &lt;my career /&gt;
                </h4>

                {/* Experience section subtitle */}
                <h4
                    ref={el => elementsRef.current[8] = el}
                    className="experience-subtitle animatable animate-delay-1"
                >
                    WHERE HAVE I BEEN?
                    <br /><br />
                    <span className="experience-subtitle-note">
                        A quick timeline of where I’ve learned, worked, grown, and occasionally figured things out the hard way.
                    </span>
                </h4>

                {/* Horizontal scrolling experience cards */}
                <motion.div className="sticky-container" style={{ x }}>
                  {images.map((img, i) => (
                    <ImageContainer
                      key={i} // unique key for each card
                      imageSource={img.src} // card image
                      title={img.title} // card title
                      subtitle={img.subtitle} // card subtitle
                      date={img.date} // card date
                    />
                  ))}
                </motion.div>
            </section>
        </>
    );
};

export default About;
