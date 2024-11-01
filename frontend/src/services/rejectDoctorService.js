import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctor';

export const rejectDoctor = async (doctorId) => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    const response = await axios.put(`${API_URL}/reject/${doctorId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to Authorization header
      },
    });
    return response.data;
  } catch (error) {
    throw 'Failed to reject doctor';
  }
};
