import React from 'react';
import './Skills.css';

const Skills = () => {
    const [easterEggFound, setEasterEggFound] = React.useState(false);
    const [skillBoost, setSkillBoost] = React.useState(false);

    const handleSecretClick = () => {
        if (!easterEggFound) {
            setEasterEggFound(true);
            setSkillBoost(true);
            alert('🚀 Cheat code activated! All skills boosted to 100%! (Just kidding... or am I? 😏)');
            setTimeout(() => setSkillBoost(false), 5000);
        }
    };

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 70 },
                { name: 'JavaScript', level: 60 },
                { name: 'TypeScript', level: 90 },
                { name: 'HTML/CSS', level: 50 },
                { name: 'Tailwind CSS', level: 20 },
                { name: 'C++', level: 75 }
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 80 },
                { name: 'Express', level: 30 },
                { name: 'Python', level: 80 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'Drizzle ORM', level: 50 },
                { name: 'tRPC', level: 40 }
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', level: 70 },
                { name: 'Docker', level: 30 },
                { name: 'Jest', level: 50 },
                { name: 'Postman', level: 80 },
                { name: 'VSCode', level: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title" onDoubleClick={handleSecretClick} style={{ cursor: 'pointer' }}>
                        Skills & Expertise
                    </h2>
                    <div className="section-underline"></div>
                    <p className="section-description">
                        Technologies and tools I use to bring ideas to life
                        {easterEggFound && <span style={{ marginLeft: '10px' }}>✨ (Power Mode!)</span>}
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
                                                className={`skill-progress ${skillBoost ? 'skill-boosted' : ''}`}
                                                style={{ width: skillBoost ? '100%' : `${skill.level}%` }}
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
