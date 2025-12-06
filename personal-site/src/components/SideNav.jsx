import React, { useState, useEffect } from 'react';
import { HiHome, HiUser, HiBriefcase, HiCode, HiMail } from 'react-icons/hi';
import './SideNav.css';

const SideNav = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', icon: HiHome, label: 'Home' },
        { id: 'about', icon: HiUser, label: 'About' },
        { id: 'projects', icon: HiBriefcase, label: 'Projects' },
        { id: 'skills', icon: HiCode, label: 'Skills' },
        { id: 'contact', icon: HiMail, label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="side-nav">
            <ul className="side-nav-list">
                {navItems.map(({ id, icon: Icon, label }) => (
                    <li key={id} className="side-nav-item">
                        <button
                            onClick={() => scrollToSection(id)}
                            className={`side-nav-button ${activeSection === id ? 'active' : ''}`}
                            aria-label={label}
                            title={label}
                        >
                            <Icon className="side-nav-icon" />
                            <span className="side-nav-tooltip">{label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNav;
