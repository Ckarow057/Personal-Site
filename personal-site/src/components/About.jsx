import React from 'react';
import './About.css';

const About = () => {
    const [showFunStats, setShowFunStats] = React.useState(false);
    const [statClickCount, setStatClickCount] = React.useState(0);

    const stats = {
        normal: [
            { number: "2+", label: "Years Experience" },
            { number: "5+", label: "Projects Completed" }
        ],
        fun: [
            { number: "∞", label: "Bugs Fixed (probably created more)" },
            { number: "9000+", label: "Cups of Coffee ☕" }
        ]
    };

    const handleStatClick = () => {
        const newCount = statClickCount + 1;
        setStatClickCount(newCount);

        if (newCount >= 3) {
            setShowFunStats(!showFunStats);
            setStatClickCount(0);
        }
    };

    const currentStats = showFunStats ? stats.fun : stats.normal;

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <div className="section-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-paragraph">
                            I'm a  full-stack developer who loves
                            to create seamless user experiences, mainly using Node.js, Typescript, and React.
                        </p>
                        <p className="about-paragraph">
                            I started off in Web Development at Wisconsin Lutheran College. Freshman year, I took a Web Development class and fell in love with development. Since then, I have been working with People.Health to build web applications for the Healthcare field.
                        </p>
                        <p className="about-paragraph">
                            When I'm not coding, you'll find me playing video games, at the shooting range, or spending time with family and friends.
                        </p>
                    </div>

                    <div className="about-stats">
                        {currentStats.map((stat, index) => (
                            <div
                                key={index}
                                className={`stat-card ${showFunStats ? 'stat-card-fun' : ''}`}
                                onClick={handleStatClick}
                                style={{ cursor: 'pointer' }}
                                title={statClickCount > 0 ? `Click ${3 - statClickCount} more time${3 - statClickCount === 1 ? '' : 's'}...` : 'Click me!'}
                            >
                                <h3 className="stat-number">{stat.number}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
