import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataSource, setDataSource] = useState('');

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/data');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setProducts(result.data || []);
            setDataSource(result.source || 'unknown');
        } catch (err) {
            console.error('Error fetching products:', err);
            setError(err.message);

            // Set fallback data for demo purposes
            setProducts([
                {
                    _id: '1',
                    name: 'Premium Wireless Headphones',
                    description: 'High-fidelity audio with active noise cancellation and 30-hour battery life.',
                    price: 299.99,
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
                    category: 'Electronics',
                    rating: 4.8,
                    inStock: true
                },
                {
                    _id: '2',
                    name: 'Minimalist Watch',
                    description: 'Elegant timepiece with sapphire crystal and genuine leather strap.',
                    price: 189.99,
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
                    category: 'Accessories',
                    rating: 4.9,
                    inStock: true
                },
                {
                    _id: '3',
                    name: 'Smart Home Speaker',
                    description: 'Voice-controlled speaker with premium sound and smart home integration.',
                    price: 129.99,
                    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop',
                    category: 'Electronics',
                    rating: 4.6,
                    inStock: true
                },
                {
                    _id: '4',
                    name: 'Ergonomic Keyboard',
                    description: 'Mechanical keyboard with RGB lighting and ergonomic split design.',
                    price: 159.99,
                    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
                    category: 'Electronics',
                    rating: 4.7,
                    inStock: true
                },
                {
                    _id: '5',
                    name: 'Leather Messenger Bag',
                    description: 'Handcrafted genuine leather bag with laptop compartment and brass hardware.',
                    price: 249.99,
                    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
                    category: 'Accessories',
                    rating: 4.9,
                    inStock: true
                },
                {
                    _id: '6',
                    name: 'Portable Charger',
                    description: 'Ultra-slim 20000mAh power bank with fast charging and dual USB ports.',
                    price: 49.99,
                    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop',
                    category: 'Electronics',
                    rating: 4.5,
                    inStock: true
                }
            ]);
            setDataSource('demo');
            setError(null); // Clear error since we have fallback data
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const getDataSourceLabel = () => {
        switch (dataSource) {
            case 'database':
                return { icon: '🗄️', text: 'MongoDB Connected' };
            case 'sample':
                return { icon: '📦', text: 'Sample Data' };
            case 'fallback':
                return { icon: '⚠️', text: 'Fallback Mode' };
            case 'demo':
                return { icon: '🎭', text: 'Demo Mode' };
            default:
                return { icon: '📊', text: 'Data Loaded' };
        }
    };

    return (
        <div className="app">
            {/* Header */}
            <header className="header" id="header">
                <div className="header-content">
                    <div className="logo">
                        <div className="logo-icon">🚀</div>
                        <span className="logo-text">MERN Store</span>
                    </div>
                    <div className="header-badge">
                        <span className="status-dot"></span>
                        <span>Vercel Ready</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main" id="main-content">
                {/* Hero Section */}
                <section className="hero" id="hero">
                    <h1 className="hero-title">
                        Premium Products Collection
                    </h1>
                    <p className="hero-subtitle">
                        Discover our curated selection of high-quality products,
                        fetched directly from MongoDB and displayed with modern React.
                    </p>
                </section>

                {/* Products Section */}
                <section className="products-section" id="products-section">
                    {loading ? (
                        <div className="loading-container" id="loading-state">
                            <div className="loading-spinner"></div>
                            <p className="loading-text">Loading products from database...</p>
                        </div>
                    ) : error && products.length === 0 ? (
                        <div className="error-container" id="error-state">
                            <span className="error-icon">❌</span>
                            <h2 className="error-title">Failed to Load Products</h2>
                            <p className="error-message">{error}</p>
                            <button
                                className="retry-button"
                                onClick={fetchProducts}
                                id="retry-button"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="section-header">
                                <h2 className="section-title">Featured Products</h2>
                                <span className="products-count">
                                    {products.length} items
                                </span>
                            </div>

                            <div className="products-grid" id="products-grid">
                                {products.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </div>

                            {dataSource && (
                                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <span className="data-source">
                                        <span className="data-source-icon">{getDataSourceLabel().icon}</span>
                                        {getDataSourceLabel().text}
                                    </span>
                                </div>
                            )}
                        </>
                    )}
                </section>
            </main>

            {/* Footer */}
            <footer className="footer" id="footer">
                <nav className="footer-links">
                    <a href="#" className="footer-link">About</a>
                    <a href="#" className="footer-link">Contact</a>
                    <a href="#" className="footer-link">Privacy</a>
                    <a href="#" className="footer-link">Terms</a>
                </nav>
                <p>
                    Built with ❤️ using MERN Stack • Deployed on Vercel
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                    © {new Date().getFullYear()} MERN Sample App. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default App;
