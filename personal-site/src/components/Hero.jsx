import React from 'react';
import './Hero.css';

const Hero = () => {
    const [nameClicks, setNameClicks] = React.useState(0);
    const [showSecretText, setShowSecretText] = React.useState(false);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNameClick = () => {
        const clicks = nameClicks + 1;
        setNameClicks(clicks);

        if (clicks === 5) {
            setShowSecretText(true);
            setTimeout(() => setShowSecretText(false), 5000);
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm <span
                            className={`highlight ${nameClicks >= 3 ? 'wiggle' : ''}`}
                            onClick={handleNameClick}
                            style={{ cursor: 'pointer' }}
                        >
                            Clay Karow
                        </span>
                    </h1>
                    {showSecretText && (
                        <p className="secret-subtitle" style={{
                            color: '#FFD700',
                            fontSize: '1.2rem',
                            fontStyle: 'italic',
                            animation: 'fadeIn 0.5s ease'
                        }}>
                            🎉 The secret keeper of Easter eggs! 🥚
                        </p>
                    )}
                    <h2 className="hero-subtitle">
                        Junior Web Developer & Computer Science Student
                    </h2>
                    <p className="hero-description">
                        I just code sometimes and make some neat stuff along the way.
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
