import React, { useEffect, useRef } from 'react';
import "./About.css";
import Portrait from '../../../src/assets/images/Portrait.png';

const About = () => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate'); // remove when leaving viewport
                    }
                });
            },
            { threshold: 0.2 }
        );

        elementsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='about-section' id="about">
            <div className='about-content'>
                <div className="about-text-image">

                    <div className="about-text">
                        <h4
                            ref={el => elementsRef.current[0] = el}
                            className="about-title animatable animate-delay-0"
                        >
                            &lt;ABOUT ME /&gt;
                        </h4>

                        <h4
                            ref={el => elementsRef.current[1] = el}
                            className="about-subtitle animatable animate-delay-1"
                        >
                            WHO AM I?
                        </h4>

                        <h1
                            ref={el => elementsRef.current[2] = el}
                            className="about-text animatable animate-delay-2"
                        >
                            I'm a <span className="glow-text">full-stack developer</span> based in Johannesburg, South Africa. Currently employed as a data analyst.<br /><br />
                            My approach combines <span className='glow-text'>logic, creativity, and precision</span> to craft solutions
                            that are both functional and visually engaging.<br /><br />
                        </h1>

                        <p
                            ref={el => elementsRef.current[3] = el}
                            className="about-subtext animatable animate-delay-3"
                        >
                            Whether I’m building responsive apps, fixing broken databases,
                            or wrestling JavaScript into submission, I turn
                            <span className="glow-text">coffee into software</span>
                            and bugs into features.<br /><br />
                            Hire me, not just because I’m <span className="glow-text">broke</span>,
                            but because I’ll make your project run smoother than my WiFi on payday.
                        </p>
                    </div>

                    <img
                        ref={el => elementsRef.current[4] = el}
                        src={Portrait}
                        alt="Portrait"
                        className="about-image animatable animate-delay-4"
                    />
                </div>

                <button
                    ref={el => elementsRef.current[5] = el}
                    className="round-outline-btn animatable animate-delay-5"
                >
                    <a
                        href="/Mthobisi Khoza.pdf"
                        download
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        DOWNLOAD CV
                    </a>
                </button>
            </div>
        </div>
    );
}

export default About;
