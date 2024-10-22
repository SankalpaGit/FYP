import React, { useState, useRef } from 'react';

const AdminOtpLogin = () => {
  const [step, setStep] = useState(1); // Step 1: Email input, Step 2: OTP input
  const [otp, setOtp] = useState(Array(6).fill('')); // Store each OTP digit in an array
  const otpRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) { // Ensure only digits are entered
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus to next input
      if (value && index < 5) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  // for performing auto input field chnge when filled out
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus(); // Move to the previous field on backspace
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>

        {step === 1 ? (
          <div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                Enter Gmail Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
                placeholder="admin@gmail.com"
              />
            </div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-800 focus:outline-none transition-colors"
                onClick={() => setStep(2)}
              >
                Proceed
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <label className="block text-sm text-gray-600">Enter 6-Digit OTP</label>
              <div className="flex space-x-2 justify-center mt-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (otpRefs.current[index] = el)} // Store the input refs
                    className="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-gray-200 transition-shadow"
                  />
                ))}
              </div>
            </div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-800 focus:outline-none transition-colors"
              >
                Login as Admin
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOtpLogin;
