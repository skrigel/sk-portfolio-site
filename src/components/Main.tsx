import React from "react";
import profilePic from '../assets/images/meFr.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/skrigel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sasha-krigel-3624052a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sasha Krigel</h1>
          <p>skrigel@mit.edu</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/skrigel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sasha-krigel-3624052a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;