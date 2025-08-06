import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setSuccess('');

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { username, password, email });
      console.log(response.data);
      setSuccess('Registration successful! You can now log in.');
      // Optionally, redirect user to the login page
      // window.location.href = '/login';
    } catch (error) {
      console.error('There was an error!', error);
      setError('There was an error during registration. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-lg font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              className={`w-full py-2 px-4 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:text-purple-800">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
