import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">Clayton Karow</h3>
                        <p className="footer-text">
                            Building digital experiences that make a difference.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Connect</h4>
                        <ul className="footer-links">
                            <li><a href="#"><FaGithub /> GitHub</a></li>
                            <li><a href="#"><FaLinkedin /> LinkedIn</a></li>
                            <li><a href="#"><FaTwitter /> Twitter</a></li>
                            <li><a href="mailto:clayton@example.com">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Clayton Karow. Made with <FaHeart style={{ color: '#FF00BB' }} /></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
