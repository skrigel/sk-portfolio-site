import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function About() {
    return (

      <div id="about">
<section className="about-section-modern">
  <div className="about-text">
    <h2>About me<span>.</span></h2>
<p>I'm a junior at MIT studying Computer Science, originally from the vibrant city of Austin, Texas, and now based in Cambridge, Massachusetts.</p>

<p>Outside of work and school, you'll find me experimenting with new recipes, swimming and lifting, and watching off-kilter tv shows.</p>

    <div className="cta-buttons">
      <button className="github-btn" onClick={() => window.open("https://github.com/skrigel", "_blank")}>View my Github →</button>
      <button className="contact-btn" onClick={() => window.open("mailto:skrigel@mit.edu", "_blank")}>Contact me →</button>
    </div>
  </div>

  <div className="about-card">
    <div className="card-header">
      <span className="emoji">💻</span> What I do
    </div>
    <p className="highlighted">
I’m passionate about the intersection of software development, user experience, and AI. My work centers around building human-centered systems that are both technically robust and deeply informed by data.
    </p>
    {/* <button className="cv-btn">Download CV</button> */}

    <div className="skills-cards">
      <div className="skill-card">
        <span className="icon">🎨</span>
        <h4>Web Development</h4>
        <p>Building high-performance websites and intuitive user interfaces with clean code.</p>
      </div>
      <div className="skill-card">
        <span className="icon">🧠</span>
        <h4>AI/Data Science</h4>
        <p>Leveraging machine learning and data analysis to drive insights and inform decision-making.</p>
      </div>
    </div>
  </div>
</section>
      </div>
   

    );
}

export default About;