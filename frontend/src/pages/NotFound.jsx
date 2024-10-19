import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    // Handle the go back functionality
    const goBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100 overflow-hidden p-6">

            {/* 404 Text */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-700 mb-4 hover:text-gray-600 transition duration-300">
                404
            </h1>

            {/* Description */}
            <p className="text-lg md:text-2xl text-gray-600 mb-6 text-center">
                Oops! The page you are looking for doesn’t exist in Chikitsakalaya.
            </p>

            {/* Back to Previous Page Button */}
            <button
                onClick={goBack}
                className="px-8 py-3 text-md md:text-lg font-medium text-white bg-teal-700 rounded-lg shadow-lg hover:bg-teal-800 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
                Go back to the last page
            </button>
</div>
    );
};

export default NotFound;
