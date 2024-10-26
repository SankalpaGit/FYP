// src/components/AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: Password
  const [error, setError] = useState('');
  const [emailVerified, setEmailVerified] = useState(false); // Flag for email verification
  const navigate = useNavigate();

  // Step 1: Verify if the email exists
  const handleEmailSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setError('');

    try {
      // Make request to check if email exists in the system
      const response = await axios.post('http://localhost:5000/api/admin/verify-email', { email });

      if (response.data.exists) {
        setEmailVerified(true); // Move to password step
        setStep(2); // Change step to show password input
      } else {
        setError('Email not found.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error verifying email.');
    }
  };

  // Step 2: Handle login with password
  const handlePasswordSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setError('');

    try {
      // Make POST request for login
      const response = await axios.post('http://localhost:5000/api/admin/login', { email, password });

      // Save token and redirect on successful login
      localStorage.setItem('token', response.data.token);
      console.log("login successful")
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>

        {step === 1 ? (
          <form onSubmit={handleEmailSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                Enter Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
                placeholder="admin@example.com"
                required
              />
            </div>

            {error && <p className="text-red-600 mt-4">{error}</p>}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-800 focus:outline-none transition-colors"
              >
                Verify Email
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handlePasswordSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-600">
                Enter Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
                placeholder="********"
                required
              />
            </div>

            {error && <p className="text-red-600 mt-4">{error}</p>}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-800 focus:outline-none transition-colors"
              >
                Login as Admin
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
