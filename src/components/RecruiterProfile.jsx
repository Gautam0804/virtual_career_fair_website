// RecruiterProfile.jsx
import React from 'react';
import Chat from '../components/Chat'; // Assuming you have a Chat component

const RecruiterProfile = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Recruiter Profile</h1>

      {/* Recruiter Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Recruiter Name</h2>
        <p>Job Title: Senior Developer</p>
        <p>Email: recruiter@example.com</p>
      </div>

      {/* Chat UI */}
      <Chat /> {/* This component will handle chat functionality */}
    </div>
  );
};

export default RecruiterProfile;
