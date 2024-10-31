// Handles the api call for listing the registration request of doctor  
// this API doesn't list of registered doctor

// src/services/doctorListingService.js
  import axios from 'axios';

  const API_URL = 'http://localhost:5000/api/doctors';

  // Fetch all doctors with a "pending" status
  export const fetchPendingDoctors = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      return response.data.filter(doctor => doctor.status === 'pending');
    } catch (error) {
      throw 'Failed to fetch doctors';
    }
  };