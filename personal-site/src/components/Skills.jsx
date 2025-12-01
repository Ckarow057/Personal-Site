import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 90 },
                { name: 'JavaScript', level: 95 },
                { name: 'TypeScript', level: 85 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Tailwind CSS', level: 88 }
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 82 },
                { name: 'Python', level: 78 },
                { name: 'MongoDB', level: 80 },
                { name: 'PostgreSQL', level: 75 }
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 65 },
                { name: 'Figma', level: 85 },
                { name: 'Testing', level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="section-underline"></div>
                    <p className="section-description">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
