import React from "react";
import mock02 from '../assets/images/mockdsn.png';
import mock09 from '../assets/images/mockairi.png';
import mock10 from '../assets/images/mockdatainf.png';
import mock11 from '../assets/images/narrative-gen-mockup.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1 className="page-title">Projects</h1>
        <div className="projects-grid">
               <div className="project">
                <a href="https://narrative-detection-simulator-1.onrender.com/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://narrative-detection-simulator-1.onrender.com/" target="_blank" rel="noreferrer"><h2>Narrative Manipulation Simulator</h2></a>
                <p>Full-stack platform for generating and simulating the spread of ideological narratives. Includes a narrative generation playground powered by LLMs and early-stage agent-based modeling of social diffusion using React and FastAPI.</p>
            </div>
            <div className="project">
                <a href="https://data-infr-map.onrender.com/map/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://data-infr-map.onrender.com/map/" target="_blank" rel="noreferrer"><h2>Data Infrastructure Mapper</h2></a>
                <p>Developed a tool for visualizing data infrastructure across Massachusetts using React and Node.js</p>
            </div>
            <div className="project">
                <a href="https://airi-chatbot-class-production.up.railway.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://airi-chatbot-class-production.up.railway.app/" target="_blank" rel="noreferrer"><h2>MIT AI Risk Index Chatbot</h2></a>
                <p>Designed, developed, and launched a RAG-based chatbot using Gemini 3.5, incorporating various data sources and APIs for enhanced user interaction.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1TLZSWXNjffbphOGaDx1UaYfHCYO1g1Fo/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1TLZSWXNjffbphOGaDx1UaYfHCYO1g1Fo/view?usp=sharing" target="_blank" rel="noreferrer"><h2>LLMs for Mediating Content Norms</h2></a>
                <p>Built data pipelines and visualization tools to analyze and mediate content norms using large language models.</p>
            </div>
    
        </div>
    </div>
    );
}

export default Project;