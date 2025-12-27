import React from "react";
import "./Footer.css";

import EmailIcon from "../../assets/icons/email.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedInIcon from "../../assets/icons/linkedin.png";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                {/* Left */}
                <div className="footer-brand">
                    <h3>Mthobisi.</h3>
                    <p>
                        Full Stack Developer from Johannesburg, where design meets
                        logic and bugs meet their end.
                    </p>
                </div>

                {/* Middle */}
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

                {/* Right */}
                <div className="footer-contact">
                    <h4>Connect</h4>

                    <div className="footer-socials">
                        <a
                            href="mailto:khozamthobisi7@gmail.com"
                            aria-label="Email"
                        >
                            <img src={EmailIcon} alt="Email" />
                        </a>

                        <a
                            href="https://github.com/themthobisikhoza"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <img src={GitHubIcon} alt="GitHub" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mthobisi-khoza"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                &copy; 2025 Mthobisi Khoza. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
