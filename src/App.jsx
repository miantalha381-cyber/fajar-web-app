import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [scrolled, setScrolled] = useState(false);

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

    const services = [
        {
            icon: '💒',
            title: 'Wedding Planning',
            description: 'Create your dream wedding with our expert planners. From intimate ceremonies to grand celebrations, we handle every detail.'
        },
        {
            icon: '🏢',
            title: 'Corporate Events',
            description: 'Impress clients and motivate teams with professionally organized conferences, galas, and corporate gatherings.'
        },
        {
            icon: '🎂',
            title: 'Birthday Parties',
            description: 'Celebrate milestones in style. We create memorable birthday experiences for all ages, from kids to adults.'
        },
        {
            icon: '🎨',
            title: 'Decor & Design',
            description: 'Transform any venue into a stunning visual masterpiece with our creative decor and floral design services.'
        },
        {
            icon: '🎉',
            title: 'Special Celebrations',
            description: 'Anniversaries, graduations, baby showers - we make every special moment extraordinary.'
        },
        {
            icon: '📋',
            title: 'Full Planning',
            description: 'Comprehensive event management from concept to completion. Sit back and enjoy while we handle everything.'
        }
    ];

    const portfolio = [
        { category: 'Wedding', title: 'Sarah & James - Garden Romance', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop' },
        { category: 'Corporate', title: 'Tech Summit 2024', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop' },
        { category: 'Birthday', title: 'Enchanted Forest Party', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop' },
        { category: 'Wedding', title: 'Beach Sunset Ceremony', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop' },
        { category: 'Celebration', title: 'Golden Anniversary Gala', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop' }
    ];

    const whyUs = [
        { icon: '✨', title: 'Attention to Detail', text: 'Every element is carefully curated to perfection' },
        { icon: '🤝', title: 'Dedicated Team', text: 'Personal coordinators assigned to your event' },
        { icon: '💰', title: 'Budget Friendly', text: 'Luxury experiences within your budget' },
        { icon: '🏆', title: '15+ Years Experience', text: 'Trusted by thousands of happy clients' }
    ];

    const testimonials = [
        {
            text: "Luxe Events made our wedding absolutely magical! Every detail was perfect, from the flowers to the timing. We couldn't have asked for a better team.",
            author: 'Emily & Michael Thompson',
            role: 'Wedding Clients',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            rating: 5
        },
        {
            text: "Our corporate gala was a massive success thanks to Luxe Events. Professional, creative, and incredibly organized. Our clients were thoroughly impressed.",
            author: 'David Chen',
            role: 'CEO, TechFlow Inc.',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
            rating: 5
        },
        {
            text: "They turned my daughter's sweet 16 into an unforgettable celebration. The attention to detail and creativity exceeded all our expectations!",
            author: 'Jennifer Martinez',
            role: 'Birthday Party Client',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
            rating: 5
        }
    ];

    return (
        <div className="app">
            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="navbar-content">
                    <div className="logo">
                        <span className="logo-icon">✦</span>
                        <span className="logo-text">Luxe Events</span>
                    </div>

                    <div className="nav-links">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                        <a href="#testimonials" className="nav-link">Testimonials</a>
                        <a href="#contact" className="nav-cta">Book Now</a>
                    </div>

                    <button className="mobile-menu-btn" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero" id="hero">
                <div className="hero-background">
                    <img
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop"
                        alt="Elegant event setup"
                    />
                </div>
                <div className="hero-overlay"></div>
                <div className="hero-decoration"></div>
                <div className="hero-decoration"></div>
                <div className="hero-decoration"></div>

                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        <span className="hero-badge-text">Premier Event Management</span>
                    </div>

                    <h1 className="hero-title">
                        Creating <span className="hero-title-highlight">Unforgettable</span> Moments That Last Forever
                    </h1>

                    <p className="hero-subtitle">
                        Transform your special occasions into extraordinary experiences. From intimate gatherings to grand celebrations, we bring your vision to life with elegance and precision.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <span>Book Your Event</span>
                            <span>→</span>
                        </a>
                        <a href="#portfolio" className="btn btn-secondary">
                            <span>View Our Work</span>
                        </a>
                    </div>
                </div>

                <div className="hero-scroll">
                    <span>Scroll to explore</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            {/* About Section */}
            <section className="section about" id="about">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image-container fade-in">
                            <div className="about-image">
                                <img
                                    src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=500&fit=crop"
                                    alt="Luxe Events team planning"
                                />
                            </div>
                            <div className="about-image-accent"></div>
                        </div>

                        <div className="about-content fade-in">
                            <span className="about-badge">About Us</span>
                            <h2 className="about-title">
                                Where Dreams Meet Flawless Execution
                            </h2>
                            <p className="about-text">
                                For over 15 years, Luxe Events has been the trusted partner for life's most important celebrations. We believe every event tells a unique story, and our mission is to craft that narrative with elegance, creativity, and meticulous attention to detail.
                            </p>
                            <p className="about-text">
                                Our team of passionate event specialists combines artistic vision with logistical expertise to deliver experiences that exceed expectations. From concept to completion, we're with you every step of the way.
                            </p>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Events Completed</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">98%</div>
                                    <div className="stat-label">Client Satisfaction</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">15+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services" id="services">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-badge">Our Services</span>
                        <h2 className="section-title">Comprehensive Event Solutions</h2>
                        <p className="section-subtitle">
                            From intimate gatherings to grand galas, we offer a full spectrum of event planning and management services tailored to your unique vision.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div className="service-card fade-in" key={index}>
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="section portfolio" id="portfolio">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-badge">Featured Work</span>
                        <h2 className="section-title">Events That Inspire</h2>
                        <p className="section-subtitle">
                            Browse through our portfolio of stunning events that showcase our creativity and dedication to excellence.
                        </p>
                    </div>

                    <div className="portfolio-grid">
                        {portfolio.map((item, index) => (
                            <div className="portfolio-item fade-in" key={index}>
                                <img src={item.image} alt={item.title} />
                                <div className="portfolio-overlay">
                                    <span className="portfolio-category">{item.category}</span>
                                    <h3 className="portfolio-title">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-us" id="why-us">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-badge">Why Choose Us</span>
                        <h2 className="section-title">The Luxe Events Difference</h2>
                        <p className="section-subtitle">
                            We don't just plan events — we create experiences that leave lasting impressions.
                        </p>
                    </div>

                    <div className="why-us-grid">
                        {whyUs.map((item, index) => (
                            <div className="why-us-card fade-in" key={index}>
                                <div className="why-us-icon">{item.icon}</div>
                                <h3 className="why-us-title">{item.title}</h3>
                                <p className="why-us-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials" id="testimonials">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-badge">Testimonials</span>
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle">
                            Don't just take our word for it — hear from the happy clients who trusted us with their special moments.
                        </p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial-card fade-in" key={index}>
                                <span className="testimonial-quote">"</span>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        className="testimonial-avatar"
                                    />
                                    <div className="testimonial-info">
                                        <h4>{testimonial.author}</h4>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="testimonial-rating">
                                    {'★'.repeat(testimonial.rating)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta" id="contact">
                <div className="cta-decoration"></div>
                <div className="cta-decoration"></div>

                <div className="cta-content fade-in">
                    <span className="section-badge">Get Started</span>
                    <h2 className="cta-title">Ready to Create Something Extraordinary?</h2>
                    <p className="cta-text">
                        Let's discuss your vision and turn it into an unforgettable reality. Our team is ready to bring your dream event to life.
                    </p>

                    <div className="cta-buttons">
                        <a href="mailto:hello@luxeevents.com" className="btn btn-primary">
                            <span>Get a Free Quote</span>
                            <span>→</span>
                        </a>
                        <a href="tel:+11234567890" className="btn btn-secondary">
                            <span>Call Us Today</span>
                        </a>
                    </div>

                    <div className="cta-contact">
                        <div className="cta-contact-item">
                            <div className="cta-contact-icon">📧</div>
                            <div className="cta-contact-text">
                                <div className="cta-contact-label">Email Us</div>
                                <div className="cta-contact-value">hello@luxeevents.com</div>
                            </div>
                        </div>
                        <div className="cta-contact-item">
                            <div className="cta-contact-icon">📞</div>
                            <div className="cta-contact-text">
                                <div className="cta-contact-label">Call Us</div>
                                <div className="cta-contact-value">+1 (123) 456-7890</div>
                            </div>
                        </div>
                        <div className="cta-contact-item">
                            <div className="cta-contact-icon">📍</div>
                            <div className="cta-contact-text">
                                <div className="cta-contact-label">Visit Us</div>
                                <div className="cta-contact-value">New York, NY</div>
                            </div>
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
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#services">Wedding Planning</a></li>
                            <li><a href="#services">Corporate Events</a></li>
                            <li><a href="#services">Birthday Parties</a></li>
                            <li><a href="#services">Decor & Design</a></li>
                            <li><a href="#services">Full Planning</a></li>
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

export default App;
