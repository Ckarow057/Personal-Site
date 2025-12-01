import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
            tags: ['React', 'Node.js', 'MongoDB'],
            link: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task manager with real-time updates and team features.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            tags: ['React', 'Firebase', 'TypeScript'],
            link: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Beautiful weather app with location-based forecasts and historical data.',
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
            tags: ['React', 'API Integration', 'CSS'],
            link: '#'
        },
        {
            id: 4,
            title: 'Portfolio CMS',
            description: 'Custom content management system for creative professionals.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            tags: ['Next.js', 'Prisma', 'PostgreSQL'],
            link: '#'
        },
        {
            id: 5,
            title: 'Social Media Analytics',
            description: 'Dashboard for tracking and analyzing social media performance metrics.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            tags: ['React', 'D3.js', 'Express'],
            link: '#'
        },
        {
            id: 6,
            title: 'Fitness Tracker',
            description: 'Mobile-first fitness app with workout plans and progress tracking.',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
            tags: ['React Native', 'Redux', 'Node.js'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="section-underline"></div>
                    <p className="section-description">
                        Here are some of my recent projects that showcase my skills and expertise
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} className="project-link">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
