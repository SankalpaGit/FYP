// handle the API call for admin login and verification

// src/services/adminLoginService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin';

// Verify if email exists in the system
export const verifyEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/verify-email`, { email });
    return response.data.exists;
  } catch (error) {
    throw error.response?.data?.message || 'Error verifying email.';
  }
};

// Handle login with email and password
export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.token;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed.';
  }
};
