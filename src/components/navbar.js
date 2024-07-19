import React from 'react';
import { motion } from 'framer-motion';
import resumeFile from '../files/Aaron Zacharia Mathew.pdf'
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';


function Navbar() {
    

    return (
        <nav className="navbar">
            <div className="nav-name">
                <h1>Aaron Zacharia Mathew</h1>
            </div>
            
            <ul className="nav-links">
                <motion.li whileHover={{ scale: 1.1 }}>
                        <a href={resumeFile} download="Aaron Zacharia Mathew.pdf">RESUME</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <a href="https://www.instagram.com/aaronzac15/" target="_blank" rel="noreferrer">
                        <img src={instagramIcon} alt="Instagram" className="icon"/>
                    </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <a href="https://www.linkedin.com/in/aaron-zacharia-mathew-369659198/" target="_blank" rel="noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="icon"/>
                    </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <a href="https://github.com/aaronzac03" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" className="icon"/>
                    </a>
                </motion.li>
        </ul>
        </nav>
    );
}

export default Navbar;