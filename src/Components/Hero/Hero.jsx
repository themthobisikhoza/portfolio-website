import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import Avatar from '../../../src/assets/images/Avatar.png';
import EmailIcon from "../../assets/icons/email.png";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedInIcon from "../../assets/icons/linkedin.png";

const Hero = () => {
    // Refs 
    const animRefs = useRef([]); 

    // State
    const [rotate, setRotate] = useState(false);

    // Particle background effect
    useEffect(() => {
        const canvas = document.getElementById('hero-bg');
        const ctx = canvas.getContext('2d');

        // Set canvas to full window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create particles
        const particles = [];
        const particleCount = 80;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
            });
        }

        // Animate particles
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#0cc0df';
                ctx.fill();

                // Move particles
                p.x += p.dx;
                p.y += p.dy;

                // Bounce on edges
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(animate);
        }
        animate();

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll animations using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero-animate');
                    } else {
                        entry.target.classList.remove('hero-animate'); 
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all animatable refs
        animRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Rotate title when about section enters view
    useEffect(() => {
        const aboutSection = document.querySelector(".about-section");
        if (!aboutSection) return;

        const rotateObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => setRotate(entry.isIntersecting));
            },
            { threshold: 0.3 }
        );

        rotateObserver.observe(aboutSection);

        return () => rotateObserver.unobserve(aboutSection);
    }, []);

    return (
        <div className='hero-section' id="hero">
            {/* Background particles */}
            <canvas id="hero-bg" className="hero-bg"></canvas>

            {/* Hero text content */}
            <div className='hero-content'>
                <h4
                    ref={el => animRefs.current[0] = el}
                    className='hero-subtitle hero-animatable hero-animate-delay-0'
                >
                    &lt;hey you, i am /&gt;
                </h4>
                <h1
                    ref={el => animRefs.current[1] = el}
                    className={`hero-title hero-animatable hero-animate-delay-1 ${rotate ? "rotate" : ""}`}
                >
                    mthobisi <br />
                    <span style={{ color: '#0cc0df' }}>khoza</span>
                </h1>
            </div>

            {/* Social links */}
            <div
                ref={el => animRefs.current[2] = el}
                className="social-icons hero-animatable hero-animate-delay-2"
            >
                <a href="mailto:khozamthobisi7@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={EmailIcon} alt="Email" />
                </a>
                <a href="https://github.com/themthobisikhoza" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/mthobisi-khoza/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" />
                </a>
            </div>

            {/* Avatar */}
            <div
                ref={el => animRefs.current[3] = el}
                className="avatar-wrapper hero-animatable hero-animate-delay-3"
            >
                <div className="avatar-circle"></div>
                <img src={Avatar} alt="Avatar" className="hero-avatar" />
            </div>
        </div>
    );
};

export default Hero;
