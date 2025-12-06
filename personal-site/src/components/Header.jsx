import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Header.css';
import { HiOutlineChip } from "react-icons/hi";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoClicks, setLogoClicks] = useState(0);
    const [secretRevealed, setSecretRevealed] = useState(false);

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

    const handleLogoClick = () => {
        const newClicks = logoClicks + 1;
        setLogoClicks(newClicks);

        // Secret Easter egg after 7 clicks
        if (newClicks === 7 && !secretRevealed) {
            setSecretRevealed(true);
            alert('🎉 Secret Unlocked! You found the persistent clicker! Try Ctrl+Shift+D for more secrets...');
            document.body.style.animation = 'rainbow-bg 3s ease infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 3000);
        }

        scrollToSection('hero');
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo" onClick={handleLogoClick} title={logoClicks >= 3 ? `${logoClicks} clicks... keep going!` : ''}>
                    <HiOutlineChip color='#FF00BB' size={24} />
                    <span className={secretRevealed ? 'logo-revealed' : ''}>CK</span>
                    {logoClicks >= 5 && !secretRevealed && <span className="click-hint">👀</span>}
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
