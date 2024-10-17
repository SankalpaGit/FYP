import React, { useState } from 'react';
import { registerDoctor } from '../../services/doctorRegisterService'; // Import the API function

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    licenceNumber: '',
    licenceDocument: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'licenceDocument') {
      setFormData({ ...formData, [name]: e.target.files[0] }); // Store the file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const form = new FormData(); // Create a FormData object
    form.append('email', formData.email);
    form.append('password', formData.password);
    form.append('licenceNumber', formData.licenceNumber);
    form.append('licenceDocument', formData.licenceDocument);

    try {
      const data = await registerDoctor(form); // Call the service function
      alert(data.message); // Display successful registration message
    } catch (error) {
      alert(error.message); // Display error message
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-custom-bg">
      {/* Image Section (hidden on mobile, displayed on large screens) */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/doctor/signup_doctor.jpeg" // Replace with your image link
          alt="Signup"
          className="object-contain w-full h-full" // Adjust height as needed
        />
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 p-8">
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-teal-700 text-center">Register As Doctor</h2>
          
          {/* Gmail Input */}
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
          
          {/* Password Input */}
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

          {/* Licence Number Input */}
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

          {/* File Upload Input */}
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

          {/* Submit Button */}
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
