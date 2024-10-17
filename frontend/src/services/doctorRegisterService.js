// thi doesn register the doctor but it store registration request

const API_URL = 'http://localhost:5000/api'; // Update with your API base URL

export const registerDoctor = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/doctors/register`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Registration failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during doctor registration:', error);
    throw new Error('Registration failed');
  }
};

