import React, { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import ProfileModel from '../modals/ProfileModel'; // Adjust the path as necessary
import NotificationModel from '../modals/NotificationModel'; // Adjust the path as necessary

const DoctorNavbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notifications = [
        { message: 'New appointment request from Dr. Smith', time: '2 minutes ago' },
        { message: 'Your profile has been updated', time: '5 minutes ago' },
        { message: 'New Doctor Approval request', time: '5 minutes ago' },
        { message: 'Dr smit break the community starndards', time: '5 minutes ago' },
    ]; // Replace this with actual notification data

    const toggleProfilePopup = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleNotificationPopup = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const handleEdit = () => {
        console.log('Edit Profile Clicked');
    };

    const handleLogout = () => {
        console.log('Logout Clicked');
    };

    return (
        <div className="flex justify-between items-center bg-custom-bg p-4 shadow-md">
           <img src="/projects/naming.png" alt="" srcset="" className='w-40'/>

            {/* Right Section: Notification and Profile */}
            <div className="flex items-center space-x-8 w-1/3 justify-end">
                {/* Notification Icon with Badge */}
                <div className="relative cursor-pointer">
                    <FaBell className="text-3xl text-gray-600" onClick={toggleNotificationPopup} />
                    <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
                        {notifications.length} {/* Update this based on actual notifications */}
                    </span>
                    {/* Notification Modal */}
                    <NotificationModel
                        isOpen={isNotificationOpen}
                        onClose={toggleNotificationPopup}
                        notifications={notifications}
                    />
                </div>

                {/* Profile Section */}
                <div className="relative">
                    <FaUserCircle
                        className="text-3xl text-gray-600 cursor-pointer"
                        onClick={toggleProfilePopup}
                    />
                    <ProfileModel
                        isOpen={isProfileOpen}
                        onClose={toggleProfilePopup}
                        profileImage="https://via.placeholder.com/50"
                        name="John Doe"
                        onEdit={handleEdit}
                        onLogout={handleLogout}
                    />
                </div>
            </div>
        </div>
    );
}

export default DoctorNavbar
