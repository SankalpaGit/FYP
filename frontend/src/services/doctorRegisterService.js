// thi doesn register the doctor but it store registration request

// src/services/doctorService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctors/register'; // Backend URL

export const registerDoctor = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error during doctor registration:', error);
    throw error.response ? error.response.data : new Error('Registration failed');
  }
};
