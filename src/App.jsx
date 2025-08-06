import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ResumeBuilderCTA from './components/ResumeBuilderCTA';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JobListings from './pages/JobListings';
import CreateProfile from './pages/CreateProfile';
import SubscriptionPlans from './pages/SubscriptionPlans';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/subscribe" element={<SubscriptionPlans />} />
      </Routes>

      <HowItWorks />
      <Features />

      {/* Resume Promo */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 py-20">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Upgrade Your Resume Now!</h2>
          <p className="text-lg mb-6">
            Boost your chances of getting hired with a professionally designed resume. Let us help you create the best version of your resume.
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-8 py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all">
            Start Building
          </button>
        </div>
      </div>

<SubscriptionPlans />
      <JobListings />
      <ResumeBuilderCTA />
      <Footer />
    </>
  );
}

export default App;
