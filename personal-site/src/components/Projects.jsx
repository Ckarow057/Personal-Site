import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Dynamic Module Federation With Vite',
            description: 'Full demo site showcasing dynamic module federation using Vite, React, and Node.js.',
            image: '/vite.jpg',
            tags: ['React', 'Node.js', 'Vite', 'Module Federation'],
            link: 'https://github.com/Ckarow057/DynamicModuleFederation'
        },
        {
            id: 2,
            title: 'tRPC Demo Site with Fastify and Drizzle ORM',
            description: 'A demo site built with tRPC, Fastify, Tailwind CSS, and Drizzle ORM to showcase efficient backend communication and database management.',
            image: '/trpc.jpg',
            tags: ['React', 'CSS', 'tRPC', 'Fastify', 'Drizzle ORM', 'TypeScript', 'Tailwind CSS'],
            link: 'https://github.com/Ckarow057/tRPC-Demo'
        },
        {
            id: 3,
            title: 'WLC MakerSpace Documentation Site',
            description: 'A comprehensive documentation site for the WLC MakerSpace, built using React and Bootstrap CSS. Locally hosted on a Raspberry Pi.',
            image: '/wlc.jpg',
            tags: ['React', 'Bootstrap CSS', 'Documentation'],
            link: 'https://github.com/jessbrew/makerspace-documentation-site'
        },
        {
            id: 4,
            title: 'Twilio SMS Test Framework',
            description: 'A test framework for sending and receiving SMS messages using the Twilio API, built with Node.js and Express for People.health\'s LHD Connect platform.',
            image: '/twilio.png',
            tags: ['Node.js', 'Express', 'Twilio API'],
            link: 'https://github.com/Ckarow057/test-framework'
        },
        {
            id: 5,
            title: 'IoT Web Component Library',
            description: 'A web component library for IoT applications, built using Micropython and Microdot to easily integrate web socket functionality into IoT devices.',
            image: '/iot.jpg',
            tags: ['Micropython', 'Microdot', 'Web Components', 'IoT'],
            link: 'https://github.com/brownjm/iot-web-components'
        },
        {
            id: 6,
            title: 'WLC Math Placement Exam',
            description: 'A math placement exam application for incoming WLC students, but using Vue and Javascript, hostend on Linode.',
            image: '/wlc.jpg',
            tags: ['Vue', 'JavaScript', 'Math Placement'],
            link: 'https://github.com/jessbrew/math-placement-exam'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title " style={{ color: '#00FFFF' }}>Featured Projects</h2>
                    <div className="section-underline"></div>
                    <p className="section-description">
                        Here are some of my recent projects that showcase my skills and expertise:
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
