import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });

      // Assuming backend sends token or user data
      const { token, user } = response.data;

      // Save token to localStorage (or context/state if using)
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Optional success feedback or redirect
      console.log('Login successful:', user);
      navigate('/dashboard'); // Change to your authenticated route
    } catch (err) {
      console.error('Login failed:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500 flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white rounded-lg transition duration-300 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
