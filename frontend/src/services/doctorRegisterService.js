// thi doesn register the doctor but it store registration request

// src/services/doctorService.js
const API_URL = 'http://localhost:5000/api/doctors/register'; // Ensure this points to your backend

export const registerDoctor = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during doctor registration:', error);
    throw new Error('Registration failed');
  }
};
