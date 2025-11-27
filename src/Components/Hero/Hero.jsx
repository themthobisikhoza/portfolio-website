import React, { useEffect, useRef, useState } from 'react';
import './Hero.css'; 
import Avatar from '../../../src/assets/images/Avatar.png';

const Hero = () => {
  const titleRef = useRef(null);
  const [rotate, setRotate] = useState(false);

  // 🎇 Particle Background
  useEffect(() => {
    const canvas = document.getElementById('hero-bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0cc0df';
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🎯 IntersectionObserver for About section
  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setRotate(true);
          } else {
            setRotate(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <div className='hero-section' id ="hero">
      <canvas id="hero-bg" className="hero-bg"></canvas>

      <div className='hero-content'>
        <h4 className='hero-subtitle'>&lt;hey you, i am /&gt;</h4>
        <h1 
          ref={titleRef} 
          className={`hero-title ${rotate ? "rotate" : ""}`}
        >
          mthobisi <br /><span style={{color: '#0cc0df'}}>khoza</span>
        </h1>
      </div>

      <div className="social-icons"> 
        <a href="mailto:khozamthobisi7@gmail.com" target="_blank" rel="noopener noreferrer"> 
          <img src="../../../src/assets/icons/email.png" alt="Email" /> 
        </a> 
        <a href="https://github.com/BeAHappyMoron" target="_blank" rel="noopener noreferrer"> 
          <img src="../../../src/assets/icons/github.png" alt="GitHub" /> 
        </a> 
        <a href="https://www.linkedin.com/in/mthobisi-khoza/" target="_blank" rel="noopener noreferrer"> 
          <img src="../../../src/assets/icons/linkedin.png" alt="LinkedIn" /> 
        </a> 
      </div>

      <div className="avatar-wrapper">
        <div className="avatar-circle"></div>
        <img src={Avatar} alt="Avatar" className="hero-avatar" />
      </div>
    </div>
  );
};

export default Hero;
