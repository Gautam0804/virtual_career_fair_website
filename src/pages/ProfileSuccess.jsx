import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100 text-center p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Profile Created Successfully!</h1>
      <p className="text-lg text-gray-700 mb-6">You're all set to explore job opportunities.</p>
      <Link to="/jobs">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">
          View Job Listings
        </button>
      </Link>
    </div>
  );
};

export default ProfileSuccess;
