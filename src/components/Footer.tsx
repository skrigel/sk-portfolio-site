import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/skrigel/" target="_blank" rel="noreferrer"><GitHubIcon className="footer-icon" /></a>
        <a href="https://www.linkedin.com/in/sasha-krigel-3624052a8/" target="_blank" rel="noreferrer"><LinkedInIcon className="footer-icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;