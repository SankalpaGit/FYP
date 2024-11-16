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


          {/* Dashboard Data Section */}
          <div className='grid grid-cols-4 gap-4'>
            <div className="text-center border-2 border-orange-200 bg-orange-100 p-4 rounded-lg shadow-md h-32 flex flex-col justify-center items-center">
              <h3 className="text-5xl font-bold text-gray-600">10</h3>
              <p className="text-gray-600">Appointments</p>
            </div>
            <div className="text-center  border-2 border-orange-200 bg-orange-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <h3 className="text-5xl font-bold text-gray-600">100</h3>
              <p className="text-gray-600">Patients Checked</p>
            </div>
            <div className="text-center border-2 border-orange-200 bg-orange-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <h3 className="text-5xl font-bold text-gray-600">5</h3>
              <p className="text-gray-600">New Messages</p>
            </div>
            <div className="text-center border-2 border-orange-200 bg-orange-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <h3 className="text-5xl font-bold text-gray-600">12</h3>
              <p className="text-gray-600">Tasks Completed</p>
            </div>
          </div>


          {/* Buttons Section */}
          <div className='flex space-x-4'>
            <button className='flex-1 py-3 border-2 border-teal-600 text-gray-600 font-semibold rounded-lg hover:bg-teal-600'>
              View Appointments
            </button>
            <button className='flex-1 py-2 border-2 border-teal-600 text-gray-600 font-semibold rounded-lg hover:bg-teal-600'>
              View Messages
            </button>
          </div>

          {/* Calendar Section */}
          <div className='flex space-x-4 overflow-x-auto m-auto justify-center'>
            {["21 nov", "22 nov", "23 nov", "24 nov", "25 nov", "26 nov", "27 nov"].map((date, index) => {
              const [day, month] = date.split(" ");
              return (
                <div key={index} className='p-6 bg-white rounded-lg  text-center flex flex-col justify-center items-center border-2 border-gray-400 shadow-lg'>
                  <span className="text-gray-500 font-bold text-2xl">{day}</span>
                  <span className="text-gray-500 font-semibold">{month}</span>
                </div>
              );
            })}
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
