import React, { useState, useEffect } from 'react';
import './ContactUs.css';

function ContactUs() {
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus({ type: 'success', message: 'Thank you! We\'ll get back to you within 24 hours.' });
        setFormData({
            name: '',
            email: '',
            phone: '',
            eventType: '',
            eventDate: '',
            message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
            setFormStatus({ type: '', message: '' });
        }, 5000);
    };

    const eventTypes = [
        'Wedding',
        'Corporate Event',
        'Birthday Party',
        'Anniversary',
        'Baby Shower',
        'Graduation',
        'Other'
    ];

    return (
        <div className="contact-page">
            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="navbar-content">
                    <a href="/" className="logo">
                        <span className="logo-icon">✦</span>
                        <span className="logo-text">Luxe Events</span>
                    </a>

                    <div className="nav-links">
                        <a href="/#about" className="nav-link">About</a>
                        <a href="/#services" className="nav-link">Services</a>
                        <a href="/#portfolio" className="nav-link">Portfolio</a>
                        <a href="/#testimonials" className="nav-link">Testimonials</a>
                        <a href="/contact" className="nav-cta">Contact Us</a>
                    </div>

                    <button className="mobile-menu-btn" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Contact Hero */}
            <section className="contact-hero">
                <div className="contact-hero-background">
                    <img
                        src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&h=600&fit=crop"
                        alt="Elegant event setup"
                    />
                </div>
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-decoration"></div>
                <div className="contact-hero-decoration"></div>

                <div className="contact-hero-content">
                    <span className="contact-hero-badge">Get In Touch</span>
                    <h1 className="contact-hero-title">Let's Create <span>Magic</span> Together</h1>
                    <p className="contact-hero-subtitle">
                        Ready to turn your vision into reality? We're here to make your dream event come true.
                    </p>
                </div>
            </section>

            {/* Contact Main Section */}
            <section className="contact-main">
                <div className="contact-container">
                    {/* Contact Info Cards */}
                    <div className="contact-info-grid fade-in">
                        <div className="contact-info-card">
                            <div className="contact-info-icon">📍</div>
                            <h3>Visit Our Studio</h3>
                            <p>123 Event Avenue</p>
                            <p>New York, NY 10001</p>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">📞</div>
                            <h3>Call Us</h3>
                            <p><a href="tel:+11234567890">+1 (123) 456-7890</a></p>
                            <p><a href="tel:+11234567891">+1 (123) 456-7891</a></p>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">📧</div>
                            <h3>Email Us</h3>
                            <p><a href="mailto:hello@luxeevents.com">hello@luxeevents.com</a></p>
                            <p><a href="mailto:info@luxeevents.com">info@luxeevents.com</a></p>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-info-icon">🕐</div>
                            <h3>Office Hours</h3>
                            <p>Mon - Fri: 9AM - 6PM</p>
                            <p>Sat: 10AM - 4PM</p>
                        </div>
                    </div>

                    {/* Main Contact Grid */}
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-container fade-in">
                            <div className="contact-form-header">
                                <span className="section-badge">Send a Message</span>
                                <h2>Tell Us About Your Event</h2>
                                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+1 (123) 456-7890"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="eventType">Event Type *</label>
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select event type</option>
                                            {eventTypes.map((type, index) => (
                                                <option key={index} value={type.toLowerCase()}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eventDate">Preferred Event Date</label>
                                    <input
                                        type="date"
                                        id="eventDate"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Tell Us About Your Vision *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        placeholder="Describe your dream event, guest count, venue preferences, and any special requirements..."
                                        required
                                    ></textarea>
                                </div>

                                {formStatus.message && (
                                    <div className={`form-status ${formStatus.type}`}>
                                        {formStatus.message}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary submit-btn">
                                    <span>Send Message</span>
                                    <span>→</span>
                                </button>
                            </form>
                        </div>

                        {/* Map & Additional Info */}
                        <div className="contact-sidebar fade-in">
                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1704296540000!5m2!1sen!2s"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '16px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Our Location"
                                ></iframe>
                            </div>

                            <div className="contact-quick-actions">
                                <h3>Quick Actions</h3>
                                <a href="tel:+11234567890" className="quick-action-btn">
                                    <span className="quick-icon">📞</span>
                                    <span>Schedule a Call</span>
                                </a>
                                <a href="mailto:hello@luxeevents.com" className="quick-action-btn">
                                    <span className="quick-icon">📧</span>
                                    <span>Send an Email</span>
                                </a>
                                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="quick-action-btn">
                                    <span className="quick-icon">📅</span>
                                    <span>Book Consultation</span>
                                </a>
                            </div>

                            <div className="contact-social">
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    <a href="#" className="social-link" aria-label="Facebook">
                                        <span>f</span>
                                    </a>
                                    <a href="#" className="social-link" aria-label="Instagram">
                                        <span>📷</span>
                                    </a>
                                    <a href="#" className="social-link" aria-label="Pinterest">
                                        <span>📌</span>
                                    </a>
                                    <a href="#" className="social-link" aria-label="LinkedIn">
                                        <span>in</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="contact-faq">
                <div className="contact-container">
                    <div className="section-header fade-in">
                        <span className="section-badge">FAQ</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-grid fade-in">
                        <div className="faq-item">
                            <h4>How far in advance should I book?</h4>
                            <p>We recommend booking at least 6-12 months in advance for weddings and large events, and 2-3 months for smaller celebrations.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you offer virtual consultations?</h4>
                            <p>Yes! We offer both in-person and virtual consultations via Zoom or Google Meet at your convenience.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What is your pricing structure?</h4>
                            <p>Our pricing is customized based on your event needs. Contact us for a personalized quote tailored to your vision and budget.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you travel for destination events?</h4>
                            <p>Absolutely! We love destination events and have planned celebrations across the globe. Travel fees apply for events outside NYC.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer" id="footer">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <span className="logo-text">✦ Luxe Events</span>
                        <p>
                            Creating unforgettable moments since 2009. We're passionate about turning your vision into reality with elegance, creativity, and precision.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">f</a>
                            <a href="#" className="social-link" aria-label="Instagram">📷</a>
                            <a href="#" className="social-link" aria-label="Pinterest">📌</a>
                            <a href="#" className="social-link" aria-label="LinkedIn">in</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/#about">About Us</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#portfolio">Portfolio</a></li>
                            <li><a href="/#testimonials">Testimonials</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><a href="/#services">Wedding Planning</a></li>
                            <li><a href="/#services">Corporate Events</a></li>
                            <li><a href="/#services">Birthday Parties</a></li>
                            <li><a href="/#services">Decor & Design</a></li>
                            <li><a href="/#services">Full Planning</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Contact</h4>
                        <ul className="footer-links">
                            <li>hello@luxeevents.com</li>
                            <li>+1 (123) 456-7890</li>
                            <li>123 Event Avenue</li>
                            <li>New York, NY 10001</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Luxe Events. All rights reserved.</p>
                    <p>Crafted with ❤️ for extraordinary celebrations</p>
                </div>
            </footer>
        </div>
    );
}

export default ContactUs;
