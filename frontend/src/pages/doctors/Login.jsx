import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-custom-bg">
      {/* Image Section (hidden on mobile, displayed on large screens) */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/doctor/login.jpeg" // Replace with your image link
          alt="Login"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 p-8 min-h-screen lg:min-h-0">
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-teal-700 text-center">Login</h2>
          
          {/* Gmail Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Gmail
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              placeholder="example@gmail.com"
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
              placeholder="********"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
