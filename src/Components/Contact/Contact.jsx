import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../Models/Earth.jsx";

import EmailIcon from "../../assets/icons/email.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedInIcon from "../../assets/icons/linkedin.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const contactRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.2 }
        );

        contactRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_y9pdojm",
            "template_o6c8bnu",
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            "DuDTIDqfvxP3xay7n"
        );

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-page-wrapper">
            <div className="contact-section" id="contact">
                <h2
                    ref={el => contactRefs.current[0] = el}
                    className="contact-title animatable animate-delay-0"
                >
                    &lt;contact me /&gt;
                </h2>
                <h3
                    ref={el => contactRefs.current[1] = el}
                    className="contact-subtitle animatable animate-delay-1"
                >
                    LET'S YAP!<br /><br /> I'D LOVE TO TALK TO YOU. SHARE YOUR DEBUGGING HORROR STORIES OR MAYBE HIRE ME. I AM ALWAYS DOWN FOR A GOOD YAP SESSION.
                </h3>

                <div className="contact-content">
                    <div
                        ref={el => contactRefs.current[2] = el}
                        className="contact-3d animatable animate-delay-2"
                    >
                        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <directionalLight position={[5, 5, 5]} intensity={2} />
                            <Earth scale={1.1} />
                            <OrbitControls
                                enableZoom={false}
                                autoRotate
                                autoRotateSpeed={0.7}
                            />
                        </Canvas>
                    </div>

                    <form
                        ref={el => contactRefs.current[3] = el}
                        className="contact-form animatable animate-delay-3"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h3>Mthobisi.</h3>
                        <p>
                            Full Stack Developer from Johannesburg, where design meets
                            logic and bugs meet their end.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills & Expertise</a></li>
                            <li><a href="#contact">Connect</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Connect</h4>
                        <div className="footer-socials">
                            <a href="mailto:khozamthobisi7@gmail.com" aria-label="Email">
                                <img src={EmailIcon} alt="Email" />
                            </a>
                            <a href="https://github.com/themthobisikhoza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <img src={GitHubIcon} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/mthobisi-khoza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src={LinkedInIcon} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    &copy; 2025 Mthobisi Khoza. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Contact;
