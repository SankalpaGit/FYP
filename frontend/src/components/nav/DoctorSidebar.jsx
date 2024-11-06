import React, { useState } from 'react';
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FaTachometerAlt, FaUserInjured, FaCalendarCheck, FaMoneyBillAlt, FaCommentAlt, FaBars, FaCaretDown, FaClock } from 'react-icons/fa';

const DoctorSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPatientsDropdownOpen, setIsPatientsDropdownOpen] = useState(false);
  const [isAppointmentsDropdownOpen, setIsAppointmentsDropdownOpen] = useState(false);
  const [isAvailabilityDropdownOpen, setIsAvailabilityDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const togglePatientsDropdown = () => {
    setIsPatientsDropdownOpen(!isPatientsDropdownOpen);
  };

  const toggleAppointmentsDropdown = () => {
    setIsAppointmentsDropdownOpen(!isAppointmentsDropdownOpen);
  };

  const toggleAvailabilityDropdown = () => {
    setIsAvailabilityDropdownOpen(!isAvailabilityDropdownOpen);
  };

  return (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} h-screen bg-white transition-all duration-300 shadow-md`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <span className={`text-gray-700 text-xl font-bold ${!isOpen && 'hidden'}`}>Doctor Portal</span>
        <FaBars className="text-gray-700 cursor-pointer" onClick={toggleSidebar} />
      </div>

      <nav className="mt-4">
        <ul className="space-y-4">
          {/* Dashboard */}
          <li className="text-gray-500 font-semibold flex items-center px-6 py-2 hover:text-teal-700 cursor-pointer">
            <FaTachometerAlt className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Dashboard</span>
          </li>

          {/* Personalization Section with Dropdown */}
          <li className="text-gray-500 font-semibold flex items-center px-6 py-2 hover:text-teal-700 cursor-pointer" onClick={toggleAvailabilityDropdown}>
            <FaClock className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Personalization</span>
            {isOpen && <FaCaretDown className={`ml-auto transition-transform ${isAvailabilityDropdownOpen ? 'rotate-180' : ''}`} />}
          </li>

          {/* Dropdown for Availability */}
          {isAvailabilityDropdownOpen && isOpen && (
            <ul className="ml-8 space-y-2 mt-2">
              <li className="text-gray-500 font-semibold px-6 py-2 hover:text-teal-700 cursor-pointer">
                <span>Set Free Time</span>
              </li>
              <li className="text-gray-500 font-semibold px-6 py-2 hover:text-teal-700 cursor-pointer">
                <span>To-Do List</span>
              </li>
            </ul>
          )}

          {/* Appointments Section with Dropdown */}
          <li className="text-gray-500 font-semibold flex items-center px-6 py-2 hover:text-teal-700 cursor-pointer" onClick={toggleAppointmentsDropdown}>
            <FaCalendarCheck className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Appointments</span>
            {isOpen && <FaCaretDown className={`ml-auto transition-transform ${isAppointmentsDropdownOpen ? 'rotate-180' : ''}`} />}
          </li>

          {/* Dropdown for Appointments */}
          {isAppointmentsDropdownOpen && isOpen && (
            <ul className="ml-8 space-y-2 mt-2">
              <li className="text-gray-500 font-semibold px-6 py-2 hover:text-teal-700 cursor-pointer">
                <span>Requests</span>
              </li>
              <li className="text-gray-500 font-semibold px-6 py-2 hover:text-teal-700 cursor-pointer">
                <span>Upcoming</span>
              </li>
            </ul>
          )}

          {/* Patient History */}
          <li className="text-gray-500 font-semibold flex items-center px-6 py-2 hover:text-teal-700 cursor-pointer">
            <FaUserInjured className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Patient History</span>
          </li>

          {/* Payments */}
          <li className="text-gray-500 font-semibold flex items-center px-6 py-2 hover:text-teal-700 cursor-pointer">
            <FaMoneyBillAlt className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Payments</span>
          </li>

          {/* Chats */}
          <li className="text-gray-500 font-semibold flex items-center px-6 py-2 hover:text-teal-700 cursor-pointer">
            <MdMarkUnreadChatAlt className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Chats</span>
          </li>

          {/* Feedback */}
          <li className="text-gray-500 font-semibold flex items-center px-6 py-2 hover:text-teal-700 cursor-pointer">
            <FaCommentAlt className="mr-4" />
            <span className={`${!isOpen && 'hidden'}`}>Feedback</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DoctorSidebar;
