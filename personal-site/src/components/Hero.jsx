import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Clayton Karow</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Full Stack Developer & Designer
                    </h2>
                    <p className="hero-description">
                        I create beautiful, functional web experiences that solve real problems
                        and delight users. Let's build something amazing together.
                    </p>
                    <div className="hero-buttons">
                        <button onClick={scrollToContact} className="btn btn-primary">
                            Get In Touch
                        </button>
                        <a href="#projects" className="btn btn-secondary">
                            View My Work
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-card card-1"></div>
                    <div className="floating-card card-2"></div>
                    <div className="floating-card card-3"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
