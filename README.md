# MERN Stack Sample App for Vercel

A modern, responsive product showcase built with MongoDB, Express-style serverless functions, React, and Node.js. Ready for deployment on Vercel.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-brightgreen)
![Vercel](https://img.shields.io/badge/Vercel-Ready-black)
![React](https://img.shields.io/badge/React-18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## ✨ Features

- **Modern UI**: Glassmorphism design with smooth animations
- **Responsive Layout**: Adapts from 1-4 columns based on screen size
- **MongoDB Integration**: Fetches real data from MongoDB Atlas
- **Serverless API**: Vercel serverless functions for the backend
- **Fallback Data**: Works even without database connection for demos

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/dbname
   ```

4. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🌐 Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable: `MONGODB_URI`
   - Click Deploy!

## 📁 Project Structure

```
my-web-app/
├── api/                    # Vercel Serverless Functions
│   └── data.js            # GET /api/data endpoint
├── src/                    # React Frontend
│   ├── components/
│   │   └── ProductCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── lib/
│   └── mongodb.js         # Database connection helper
├── scripts/
│   └── seed.js            # Database seeding script
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, CSS3 (Glassmorphism)
- **Backend**: Vercel Serverless Functions
- **Database**: MongoDB Atlas with Mongoose
- **Deployment**: Vercel

## 📱 Responsive Breakpoints

| Screen Size | Columns |
|-------------|---------|
| Desktop (1200px+) | 4 columns |
| Tablet (768px-1199px) | 2-3 columns |
| Mobile (< 768px) | 1 column |

## 📄 License

MIT License - feel free to use this project for learning or production!
