import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import "./About.css";
import Portrait from '../../../src/assets/images/Portrait.png';
import One from "../../assets/images/One.jpg";
import Two from "../../assets/images/Two.jpg";
import Three from "../../assets/images/Three.jpg";
import Four from "../../assets/images/Four.jpg";
import Five from "../../assets/images/Five.png";

// Horizontal scroll image component
const ImageContainer = ({ imageSource, title, subtitle, date }) => (
  <div className="image-container">
    <img src={imageSource} alt={title} />
    <div className="text-content">
      <h4 className="title">{title}</h4>
      <p className="subtitle">{subtitle}</p>
      <p className="date">{date}</p>
    </div>
  </div>
);

const About = () => {
  const elementsRef = useRef([]);
  const expRefs = useRef([]);
  const sectionRef = useRef(null);

  // State to control rotation
  const [rotate, setRotate] = useState(false);

  // Animate About elements when About enters viewport
useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class when in view
                    entry.target.classList.add('animate');
                }
                // DON'T remove the class! This prevents disappearing
            });
        },
        { threshold: 0.2 }
    );

    elementsRef.current.forEach(el => {
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
}, []);

  // Animate Experience section titles
  useEffect(() => {
    const expObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.3 }
    );

    expRefs.current.forEach(el => el && expObserver.observe(el));
    return () => expObserver.disconnect();
  }, []);

  // Hero observer to control rotation back
  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // rotate false when Hero is visible
          setRotate(!entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    heroObserver.observe(heroSection);
    return () => heroObserver.disconnect();
  }, []);

  // Horizontal scroll motion
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const rawX = useTransform(scrollYProgress, [0.9, 1], ["0%", "-80%"]);
  const x = useSpring(rawX, { stiffness: 40, damping: 25 });

  // Experience images
  const images = [
    { src: One, title: "A-STEP & CUADS Tutor", subtitle: "Business Calculations (Statistics)", date: "June 2024 – October 2024" },
    { src: Two, title: "1st & 3rd Year Top Achiever", subtitle: "University of the Free State", date: "Oct 2022 & Sep 2024" },
    { src: Three, title: "BSc in Computer Science", subtitle: "University of the Free State", date: "Feb 2022 – Nov 2024" },
    { src: Four, title: "Data Analyst Trainee", subtitle: "Auditor-General South Africa | Pretoria", date: "Apr 2025 – Present" },
    { src: Five, title: "BSc (Hons) in Computer Science", subtitle: "University of Pretoria", date: "Starting Feb 2026" }
  ];

  return (
    <div className='about-section' id="about">
      {/* ========================= ABOUT ME ========================= */}
      <div className='about-content'>
        <div className="about-text-image">
          <div className={`about-text ${rotate ? 'rotate-animation' : ''}`}>
            <h4 ref={el => elementsRef.current[0] = el} className="about-title animatable animate-delay-0">
              &lt;ABOUT ME /&gt;
            </h4>

            <h4 ref={el => elementsRef.current[1] = el} className="about-subtitle animatable animate-delay-1">
              WHO AM I?
            </h4>

            <h1 ref={el => elementsRef.current[2] = el} className="about-text animatable animate-delay-2">
              I'm a <span className="glow-text">full-stack developer</span> based in Johannesburg, South Africa. Currently employed as a data analyst.<br /><br />
              My approach combines <span className='glow-text'>logic, creativity, and precision</span> to craft solutions
              that are both functional and visually engaging.<br /><br />
            </h1>

            <p ref={el => elementsRef.current[3] = el} className="about-subtext animatable animate-delay-3">
              Whether I’m building responsive apps, fixing broken databases,
              or wrestling JavaScript into submission, I turn
              <span className="glow-text">coffee into software</span>
              and bugs into features.<br /><br />
              Hire me, not just because I’m <span className="glow-text">broke</span>,
              but because I’ll make your project run smoother than my WiFi on payday.
            </p>
          </div>

          <img ref={el => elementsRef.current[4] = el} src={Portrait} alt="Portrait" className="about-image animatable animate-delay-4" />
        </div>

        <button ref={el => elementsRef.current[5] = el} className="round-outline-btn animatable animate-delay-5">
          <a href="#projects" style={{ color: "inherit", textDecoration: "none" }}>
            VIEW MY WORK
          </a>
        </button>

        <button ref={el => elementsRef.current[6] = el} className="round-outline-btn animatable animate-delay-5">
          <a href="mailto:khozamthobisi7@gmail.com" target="_blank" rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}>
            CONTACT ME
          </a>
        </button>
      </div>

      {/* ========================= EXPERIENCE / CAREER ========================= */}
      <section className="carousel-section" ref={sectionRef}>
        <h4 ref={el => expRefs.current[0] = el} className="experience-title animatable animate-delay-0">
          &lt;my career /&gt;
        </h4>

        <h4 ref={el => expRefs.current[1] = el} className="experience-subtitle animatable animate-delay-1">
          WHERE HAVE I BEEN?
          <br /><br />
          <span className="experience-subtitle-note">
            A quick timeline of where I’ve learned, worked, grown, and occasionally figured things out the hard way.
          </span>
        </h4>

        <motion.div className="sticky-container" style={{ x }}>
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
    </div>
  );
};

export default About;
