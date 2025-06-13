import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function About() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
          <h1>About Me!</h1>

            <p><b>Hello, I'm Sasha!</b> I'm a junior at MIT studying Computer Science. I hail from the vibrant city of Austin, Texas and live in Cambridge, Massachusetts.</p>
            <p>
            My interests lie in the realm of software development, data management, and cloud computing—particularly in finance, entertainment, and emerging tech. I'm passionate about creating and bringing ideas to life.

            </p>

            <p><b>Hobbies:</b> Outside of work and school, you'll likely find me experimenting with new baking recipes, designing ironic tees, and working out.</p>
</div>
{/* 
            {/* <div className="skills-grid"> */}
                {/* <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                {/* </div> */} 
            {/* </div> */}
        </div>
    );
}

export default About;