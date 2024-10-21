import React, { useState } from 'react';
import { registerDoctor } from '../../services/doctorRegisterService'; // Import the service

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    licenceNumber: '',
    licenceDocument: null,
  });

  const [errors, setErrors] = useState(''); // To store and display validation errors
  const [successMessage, setSuccessMessage] = useState(''); // To store and display success messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'licenceDocument') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setErrors('');
    setSuccessMessage('');

    const form = new FormData();
    form.append('email', formData.email);
    form.append('password', formData.password);
    form.append('licenceNumber', formData.licenceNumber);
    form.append('licenceDocument', formData.licenceDocument);

    try {
      const data = await registerDoctor(form); // Call the service function

      // Show the success message returned from the backend
      setSuccessMessage(data.message); // Set success message
    } catch (error) {
      setErrors(error.message); // Set error message
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-custom-bg">
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/doctor/signup_doctor.jpeg"
          alt="Signup"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex justify-center items-center w-full lg:w-1/2 p-8">
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-teal-700 text-center">Register As Doctor</h2>

          {/* Error message display */}
          {errors && <p className="text-red-500 text-center mb-4">{errors}</p>}

          {/* Success message display */}
          {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Gmail</label>
            <input
              name="email"
              id="email"
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              placeholder="example@gmail.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              placeholder="********"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="licence">Licence Number</label>
            <input
              name="licenceNumber"
              id="licence"
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              placeholder="1234-5678"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="file">Licence Document</label>
            <input
              name="licenceDocument"
              id="file"
              type="file"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Get Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;