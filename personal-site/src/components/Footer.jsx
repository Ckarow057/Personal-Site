import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [secretClicks, setSecretClicks] = React.useState(0);
    const [showSecret, setShowSecret] = React.useState(false);

    const handleSecretClick = () => {
        setSecretClicks(prev => prev + 1);
        if (secretClicks + 1 === 3) {
            setShowSecret(true);
        }
    };

    // Hidden binary message (translates to "HELLO HACKER")
    const binaryMessage = "01001000 01000101 01001100 01001100 01001111 00100000 01001000 01000001 01000011 01001011 01000101 01010010";

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo" onClick={handleSecretClick} style={{ cursor: 'pointer' }}>
                            Clayton Karow
                        </h3>
                        <p className="footer-text">
                            Just doing Web Development things and making cool stuff along the way.
                        </p>
                        {showSecret && (
                            <p className="secret-message" title="Binary: HELLO HACKER">
                                🔐 {binaryMessage}
                            </p>
                        )}
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
                            <li><a href="https://github.com/Ckarow057"><FaGithub /> GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/clayton-karow-17a77027a/"><FaLinkedin /> LinkedIn</a></li>
                            <li><a href="mailto:cj3karow@gmail.com">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Clay Karow</p>
                    <p className="hidden-morse" title="Morse code: KEEP EXPLORING">
                        <small style={{ opacity: 0.3, fontSize: '10px' }}>
                            -.- . . .--. / . -..- .--. .-.. --- .-. .. -. --.
                        </small>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
