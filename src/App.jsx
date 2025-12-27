import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import "./index.css";
import Skills from "./Components/Skills/Skills";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";

const App = () => {
  const [darkBg, setDarkBg] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll(
            ".about-section, .carousel-section"
        );

        const visibilityMap = new Map();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visibilityMap.set(entry.target, entry.isIntersecting);
                });

                const anyDarkVisible = [...visibilityMap.values()].some(Boolean);
                setDarkBg(anyDarkVisible);
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);


  return (
    <div className="app-wrapper">
      <CustomCursor/>
      <div className={`bg-layer light`}></div>
      <div className={`bg-layer dark ${darkBg ? "active" : ""}`}></div>
        <Navbar />
        <Hero />
        <About />

        <Projects/>
        <Skills/>
        <hr className="section-divider" />
        <Contact />
        <Footer />

    </div>

  );
};

export default App;
