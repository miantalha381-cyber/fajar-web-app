import { connectToDatabase, Product } from '../lib/mongodb.js';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await connectToDatabase();

        const products = await Product.find({}).sort({ createdAt: -1 }).lean();

        // If no products exist, return sample data for demo
        if (products.length === 0) {
            const sampleProducts = [
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
            ];
            return res.status(200).json({ data: sampleProducts, source: 'sample' });
        }

        return res.status(200).json({ data: products, source: 'database' });
    } catch (error) {
        console.error('Database error:', error);

        // Return sample data on error for demo purposes
        const sampleProducts = [
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
        ];
        return res.status(200).json({ data: sampleProducts, source: 'fallback', note: 'Using sample data - MongoDB not connected' });
    }
}
