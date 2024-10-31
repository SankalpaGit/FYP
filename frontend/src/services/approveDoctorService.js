import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctor';

export const approveDoctor = async (doctorId) => {
  try {
    const response = await axios.put(`${API_URL}/approve/${doctorId}`);
    return response.data;
  } catch (error) {
    throw 'Failed to approve doctor';
  }
};
