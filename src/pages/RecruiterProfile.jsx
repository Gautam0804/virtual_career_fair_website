import React from 'react';
import Chat from './Chat'; // Make sure the Chat component is correctly implemented

const RecruiterProfile = () => {
  // Sample recruiter data, you can replace this with dynamic data from API or props
  const recruiter = {
    name: 'John Doe',
    jobTitle: 'Senior Developer',
    email: 'recruiter@example.com',
    company: 'Tech Corp',
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Recruiter Profile</h1>

      {/* Recruiter Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">{recruiter.name}</h2>
        <p>Job Title: {recruiter.jobTitle}</p>
        <p>Company: {recruiter.company}</p>
        <p>Email: {recruiter.email}</p>
      </div>

      {/* Chat UI */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Chat with Recruiter</h3>
        {/* Pass recruiterId or any unique identifier to the Chat component */}
        <Chat recruiterId={recruiter.email} />  
      </div>
    </div>
  );
};

export default RecruiterProfile;
