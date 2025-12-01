import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent successfully!');
        setTimeout(() => {
            setStatus('');
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="section-underline"></div>
                    <p className="section-description">
                        Have a project in mind? Let's work together to create something amazing
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3 className="contact-subtitle">Let's Connect</h3>
                        <p className="contact-text">
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your visions.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon"><HiMail /></div>
                                <div className="method-info">
                                    <h4>Email</h4>
                                    <a href="mailto:clayton@example.com">clayton@example.com</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon"><HiPhone /></div>
                                <div className="method-info">
                                    <h4>Phone</h4>
                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon"><HiLocationMarker /></div>
                                <div className="method-info">
                                    <h4>Location</h4>
                                    <p>San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            Send Message
                        </button>

                        {status && <p className="form-status">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
