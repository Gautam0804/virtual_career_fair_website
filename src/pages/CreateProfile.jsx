import React, { useState } from 'react';
import axios from 'axios';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    axios
      .post('http://localhost:5000/api/profiles', {
        name,
        email,
        phone,
        location,
        experience,
        skills,
        education,
        resumeLink,
      })
      .then((res) => {
        setLoading(false);
        setStatusMessage('Profile Created Successfully!');
      })
      .catch((err) => {
        setLoading(false);
        setStatusMessage('Failed to create profile. Please try again.');
        console.error(err);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 min-h-screen flex items-center justify-center animate__animated animate__fadeIn">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-4xl transition-all transform hover:scale-105 hover:shadow-lg duration-500">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
          Create Your Profile
        </h2>

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`text-center p-4 mb-4 rounded-lg ${
              statusMessage.includes('Successfully') ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="text-lg font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="experience" className="text-lg font-medium text-gray-700 mb-2">Experience</label>
              <textarea
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
                rows="4"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="skills" className="text-lg font-medium text-gray-700 mb-2">Skills</label>
              <textarea
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
                rows="4"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="education" className="text-lg font-medium text-gray-700 mb-2">Education</label>
              <textarea
                id="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
                rows="4"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="resumeLink" className="text-lg font-medium text-gray-700 mb-2">Resume Link (Optional)</label>
              <input
                type="text"
                id="resumeLink"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:ring-indigo-400"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold py-3 px-10 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              disabled={loading}  // Disable the button while loading
            >
              {loading ? 'Creating Profile...' : 'Create Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
