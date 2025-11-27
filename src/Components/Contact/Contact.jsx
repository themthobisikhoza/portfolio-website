import React, { useState } from "react";
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
            <h2 className="contact-title">&lt;contact /&gt;</h2>
            <h3 className="contact-subtitle">LET'S YAP</h3>

            {/* 2-COLUMN LAYOUT */}
            <div className="contact-content">

                {/* LEFT COLUMN — EARTH MODEL */}
                <div className="contact-3d">
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

                {/* RIGHT COLUMN — FORM */}
                <form className="contact-form" onSubmit={handleSubmit}>
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
