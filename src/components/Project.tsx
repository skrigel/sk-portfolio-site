import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://data-infr-map.onrender.com/map/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://data-infr-map.onrender.com/map/" target="_blank" rel="noreferrer"><h2>Data Infrastructure Mapper</h2></a>
                <p>Developed a tool for visualizing data infrastructure across Massachusetts using React and Node.js</p>
            </div>
            <div className="project">
                <a href="https://github.com/skrigel/airi-chatbot-class/tree/main/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/skrigel/airi-chatbot-class/tree/main/" target="_blank" rel="noreferrer"><h2>MIT AI Risk Index Chatbot</h2></a>
                <p>Designed, developed, and launched a RAG-based chatbot using Gemini 3.5, incorporating various data sources and APIs for enhanced user interaction.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>LLMs for Mediating Content Norms</h2></a>
                <p>Built data pipelines and visualization tools to analyze and mediate content norms using large language models.</p>
            </div>
    
        </div>
    </div>
    );
}

export default Project;