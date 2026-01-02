import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import "./index.css";

const App = () => {
    const [darkBg, setDarkBg] = useState(false);
    const [loading, setLoading] = useState(true);

    // Loader
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    // ONLY run observer after loading is done
    useEffect(() => {
        if (loading) return;

        const sections = document.querySelectorAll(
            ".about-section, .carousel-section"
        );

        const visibilityMap = new Map();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visibilityMap.set(entry.target, entry.isIntersecting);
                });

                setDarkBg([...visibilityMap.values()].some(Boolean));
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [loading]);

    return (
        <div className="app-wrapper">
            <CustomCursor />

            {/* ✅ Background layers ALWAYS mounted */}
            <div className="bg-layer light"></div>
            <div className={`bg-layer dark ${darkBg ? "active" : ""}`}></div>

            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Projects />
                    <Skills />
                    <hr className="section-divider" />
                    <Contact />
                </>
            )}
        </div>
    );
};

export default App;
