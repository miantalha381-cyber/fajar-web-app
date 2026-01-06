import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '..', '.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ Please set MONGODB_URI in your .env file');
    console.log('Example: MONGODB_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/dbname');
    process.exit(1);
}

// Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 4.5 },
    inStock: { type: Boolean, default: true },
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const sampleProducts = [
    {
        name: 'Premium Wireless Headphones',
        description: 'High-fidelity audio with active noise cancellation and 30-hour battery life.',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        category: 'Electronics',
        rating: 4.8,
        inStock: true
    },
    {
        name: 'Minimalist Watch',
        description: 'Elegant timepiece with sapphire crystal and genuine leather strap.',
        price: 189.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
        category: 'Accessories',
        rating: 4.9,
        inStock: true
    },
    {
        name: 'Smart Home Speaker',
        description: 'Voice-controlled speaker with premium sound and smart home integration.',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop',
        category: 'Electronics',
        rating: 4.6,
        inStock: true
    },
    {
        name: 'Ergonomic Keyboard',
        description: 'Mechanical keyboard with RGB lighting and ergonomic split design.',
        price: 159.99,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
        category: 'Electronics',
        rating: 4.7,
        inStock: true
    },
    {
        name: 'Leather Messenger Bag',
        description: 'Handcrafted genuine leather bag with laptop compartment and brass hardware.',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
        category: 'Accessories',
        rating: 4.9,
        inStock: true
    },
    {
        name: 'Portable Charger',
        description: 'Ultra-slim 20000mAh power bank with fast charging and dual USB ports.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop',
        category: 'Electronics',
        rating: 4.5,
        inStock: true
    }
];

async function seed() {
    try {
        console.log('🔄 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        console.log('🗑️  Clearing existing products...');
        await Product.deleteMany({});

        console.log('📦 Inserting sample products...');
        await Product.insertMany(sampleProducts);

        console.log('✅ Successfully seeded database with', sampleProducts.length, 'products');

        const products = await Product.find({});
        console.log('\n📋 Products in database:');
        products.forEach((p, i) => {
            console.log(`   ${i + 1}. ${p.name} - $${p.price}`);
        });

    } catch (error) {
        console.error('❌ Error seeding database:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('\n👋 Disconnected from MongoDB');
        process.exit(0);
    }
}

seed();
