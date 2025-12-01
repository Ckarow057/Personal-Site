import React from 'react';
import './About.css';

const About = () => {
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
                            I'm a passionate full-stack developer with a keen eye for design and
                            a love for creating seamless user experiences. With expertise in modern
                            web technologies, I transform ideas into elegant, functional applications.
                        </p>
                        <p className="about-paragraph">
                            My journey in web development started with a curiosity about how things work
                            on the internet. Today, I specialize in building responsive, accessible, and
                            performant web applications that make a difference.
                        </p>
                        <p className="about-paragraph">
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open source projects, or enjoying the great outdoors. I believe in continuous
                            learning and staying ahead of the curve in this ever-evolving field.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <h3 className="stat-number">3+</h3>
                            <p className="stat-label">Years Experience</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">25+</h3>
                            <p className="stat-label">Projects Completed</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">100%</h3>
                            <p className="stat-label">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
