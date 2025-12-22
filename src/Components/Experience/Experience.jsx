import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './Experience.css';
import One from "../../assets/images/One.jpg";
import Two from "../../assets/images/Two.jpg";
import Three from "../../assets/images/Three.jpg";
import Four from "../../assets/images/Four.jpg";
import ImageContainer from "../ImageContainer/ImageContainer";

const images = [
    { src: One, desc: "30 June 2024" },
    { src: Two, desc: "15 July 2024" },
    { src: Three, desc: "22 August 2024" },
    { src: Four, desc: "10 Sept 2024" }
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
            </h4>

            <motion.div
                className="sticky-container"
                style={{ x }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                {images.map((img, i) => (
                    <ImageContainer key={i} imageSource={img.src} description={img.desc} />
                ))}
            </motion.div>

        </section>
    );
};

export default Experience;
