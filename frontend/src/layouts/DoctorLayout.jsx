import React from 'react';
import DoctorSidebar from '../components/nav/DoctorSidebar';
import DoctorNavbar from '../components/nav/DoctorNavbar';

const DoctorLayout = ({ children }) => {
  return (
    <div className="flex">
            {/* Sidebar */}
            <DoctorSidebar />
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <DoctorNavbar />
                {/* Main Content */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
  )
}

export default DoctorLayout
