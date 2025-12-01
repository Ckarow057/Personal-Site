import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo" onClick={() => scrollToSection('hero')}>
                    CK
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                </button>

                <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
                    <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
