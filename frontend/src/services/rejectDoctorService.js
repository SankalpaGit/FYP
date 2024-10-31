import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctor';

export const rejectDoctor = async (doctorId) => {
  try {
    const response = await axios.put(`${API_URL}/reject/${doctorId}`);
    return response.data;
  } catch (error) {
    throw 'Failed to reject doctor';
  }
};
