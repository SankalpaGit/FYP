import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await axios.post('http://localhost:5000/api/doctor/login', { email, password });

      // Save token (if needed)
      localStorage.setItem('token', response.data.token);

      // Redirect on successful login
      navigate('/doctor/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.error || 'An error occurred during login');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-custom-bg">
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/doctor/login.jpeg"
          alt="Login"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 p-8 min-h-screen lg:min-h-0">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-teal-700 text-center">Login</h2>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Gmail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              placeholder="example@gmail.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
