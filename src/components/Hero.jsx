// src/components/Hero.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center px-6 relative overflow-hidden">
      {/* Animated BG Blobs (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 blur-3xl">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply animate-pulse delay-1000"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Your <span className="text-yellow-300">Career</span> Journey Begins Here!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover opportunities, connect with recruiters, and land your dream job virtually.
        </p>
        <Link
          to="/signup"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
}
