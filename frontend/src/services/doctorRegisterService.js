// thi doesn register the doctor but it store registration request

// src/services/doctorService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctors/register';

export const registerDoctor = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data; // Assuming the response contains success message/data
  } catch (error) {
    if (error.response && error.response.data.error) {
      throw new Error(error.response.data.error); // Pass the specific error message
    } else {
      throw new Error('Registration failed'); // Generic error message
    }
  }
};
