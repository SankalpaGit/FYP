import React from 'react';
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FaTachometerAlt, FaUserInjured, FaCalendarCheck, FaMoneyBillAlt, FaCommentAlt, FaClock, FaTasks, FaClipboardList, FaCalendarDay } from 'react-icons/fa';

const DoctorSidebar = () => {
  return (
    <div className="flex flex-col w-20 h-screen bg-white shadow-md">
      <div className="flex items-center justify-center px-4 py-3">
        <img src="/projects/logo.png" alt="Logo" className="w-14 h-auto" /> {/* Increased logo size */}
      </div>

      <nav className="">
        <ul className="space-y-6"> {/* Added space-y-6 for vertical spacing */}
          {/* Dashboard */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaTachometerAlt className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Dashboard
            </span>
          </li>

          {/* Personalization - Set Free Time */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaClock className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Set Free Time
            </span>
          </li>

          {/* Personalization - To-Do List */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaTasks className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              To-Do List
            </span>
          </li>
          {/* Appointments - Requests */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaCalendarCheck className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Appointment Requests
            </span>
          </li>

          {/* Appointments - Upcoming */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaCalendarDay className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Upcoming Appointments
            </span>
          </li>

          {/* Patient History */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaUserInjured className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Patient History
            </span>
          </li>

          {/* Payments */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaMoneyBillAlt className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Payments
            </span>
          </li>

          {/* Chats */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <MdMarkUnreadChatAlt className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Chats
            </span>
          </li>

          {/* Feedback */}
          <li className="relative group flex justify-center mt-6 mb-6">
            <FaCommentAlt className="text-teal-600 text-2xl" /> {/* Increased icon size */}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-white text-teal-800 font-semibold px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
              Feedback
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DoctorSidebar;
