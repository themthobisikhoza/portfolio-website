import React from 'react'
import "./about.css"
import Portrait from '../../../src/assets/images/Portrait.png';

const About = () => {
  return (
    <div className='about-section' id="about">
      <div className='about-content'>
        <div className="about-text-image">
          <div className="about-text">
            <h4 className='about-title'> &lt;ABOUT ME /&gt;</h4>
            <h4 className='about-subtitle'>WHO AM I?</h4>
            <h1 className='about-text'>
              I'm a <span className="glow-text">full-stack developer</span> based in Johannesburg, South Africa. Currently employed as a data analyst.<br/><br/>
              My approach combines <span className='glow-text'>logic, creativity, and precision</span> to craft solutions 
              that are both functional and visually engaging.<br/><br/>
            </h1>
            <p className="about-subtext">
              Whether I’m building responsive apps, fixing broken databases, 
              or wrestling JavaScript into submission, I turn 
              <span className="glow-text">coffee into software</span> 
              and bugs into features.<br /><br />
              Hire me, not just because I’m <span className="glow-text">broke</span>, 
              but because I’ll make your project run smoother than my WiFi on payday.
            </p>
          </div>
          <img src={Portrait} alt="Portrait" className="about-image" />
        </div>
        <button className="round-outline-btn">
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
  )
}

export default About;
