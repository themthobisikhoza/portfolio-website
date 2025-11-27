import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../Models/Earth.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const contactRefs = useRef([]);

    // IntersectionObserver to animate on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate'); // allow re-trigger
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
        <div className="contact-section" id="contact">
            <h2
                ref={el => contactRefs.current[0] = el}
                className="contact-title animatable animate-delay-0"
            >
                &lt;contact /&gt;
            </h2>
            <h3
                ref={el => contactRefs.current[1] = el}
                className="contact-subtitle animatable animate-delay-1"
            >
                LET'S YAP
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
    );
};

export default Contact;
