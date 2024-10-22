import React from 'react';
import AdminSidebar from '../components/nav/AdminSidebar';
import AdminNavbar from '../components/nav/AdminNavbar';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <AdminNavbar />
                {/* Main Content */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
