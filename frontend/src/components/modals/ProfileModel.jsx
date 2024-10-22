import React from 'react';
import { FaEdit, FaSignOutAlt } from 'react-icons/fa'; // Import icons

const ProfileModel = ({ isOpen, profileImage, name, gmail, onEdit, onLogout }) => {
  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="absolute top-full right-0 bg-white text-black p-6 rounded-lg shadow-md w-72 z-50"> {/* Increased width */}
      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Profile Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-4" // Profile image size
      />
      <p className="text-center font-semibold  ">{name}</p> {/* Increased font size */}
      <p className="text-center text-sm mb-2">{gmail}</p> {/* Increased font size */}
      {/* Edit Profile Button */}
      <button
        className="flex items-center justify-center w-full bg-teal-500 text-white py-2 mb-2 rounded-full hover:bg-teal-600 text-base" // Reduced padding and font size
        onClick={onEdit}
      >
        <FaEdit className="mr-2" /> {/* Edit icon */}
        Edit Profile
      </button>

      {/* Logout Button */}
      <button
        className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 text-base" // Reduced padding and font size
        onClick={onLogout}
      >
        <FaSignOutAlt className="mr-2" /> {/* Logout icon */}
        Logout
      </button>
    </div>
  );
};

export default ProfileModel;
