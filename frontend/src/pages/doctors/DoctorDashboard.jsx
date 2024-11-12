import React from 'react';
import DoctorLayout from '../../layouts/DoctorLayout';

const DoctorDashboard = () => {
  return (
    <DoctorLayout>
      <div className='w-11/12 h-full flex m-auto justify-between'>
        {/* Left Section */}
        <div className='w-8/12 h-full space-y-6'>

          {/* Welcome & Quote Section */}
          <div className='p-6 bg-teal-600 rounded-lg shadow-md h-40 flex flex-col justify-center '>
            <h2 className="font-bold text-gray-100 text-2xl">Welcome, Doctor Sankalpa</h2>
            <p className="text-gray-200 mt-2">You have 2 appointments today</p>
            <p className="text-gray-200">"Stay healthy, stay happy."</p>
          </div>


          {/* Calendar Section */}
          <div className='flex space-x-4 overflow-x-auto m-auto justify-center'>
            {["21 Sep", "22 Sep", "23 Sep", "24 Sep", "25 Sep", "26 Sep", "27 Sep", "28 Sep"].map((date, index) => {
              const [day, month] = date.split(" ");
              return (
                <div key={index} className='p-6 bg-white rounded-lg shadow-md text-center flex flex-col justify-center items-center'>
                  <span className="text-gray-500 font-bold text-2xl">{day}</span>
                  <span className="text-gray-500 font-semibold">{month}</span>
                </div>
              );
            })}
          </div>



          {/* Dashboard Data Section */}
          <div className='grid grid-cols-4 gap-4'>
            <div className="text-center bg-orange-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700">10</h3>
              <p className="text-gray-600">Appointments</p>
            </div>
            <div className="text-center bg-orange-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700">100</h3>
              <p className="text-gray-600">Patients Checked</p>
            </div>
            <div className="text-center bg-orange-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700">5</h3>
              <p className="text-gray-600">New Messages</p>
            </div>
            <div className="text-center bg-orange-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700">12</h3>
              <p className="text-gray-600">Tasks Completed</p>
            </div>
          </div>


          {/* Buttons Section */}
          <div className='flex space-x-4'>
            <button className='flex-1 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600'>
              View Appointments
            </button>
            <button className='flex-1 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600'>
              View Messages
            </button>
          </div>

        </div>

        {/* Right Section */}
        <div className='bg-blue-400 w-3/12 h-full rounded-lg shadow-md p-4'>
          {/* Add content here, e.g., quick stats, notifications, etc. */}
          <p className="text-white">Right sidebar content</p>
        </div>
      </div>
    </DoctorLayout>
  );
};

export default DoctorDashboard;
