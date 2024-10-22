import React from 'react';

const NotificationModel = ({ isOpen, onClose, notifications }) => {
    if (!isOpen) return null; // Do not render if not open

    return (
        <div className="absolute top-full right-0 bg-white text-black p-6 rounded-lg shadow-md w-80 h-80 z-50"> {/* Increased width and height */}
            <h3 className="font-semibold text-lg mb-2">Notifications</h3>
            {notifications.length === 0 ? (
                <p className="text-center text-gray-500">No new notifications</p>
            ) : (
                <ul className="max-h-60 overflow-y-auto">
                    {notifications.map((notification, index) => (
                        <li key={index} className="py-2 border-b last:border-b-0">
                            <p>{notification.message}</p>
                            <span className="text-xs text-gray-400">{notification.time}</span>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    );
};

export default NotificationModel;
