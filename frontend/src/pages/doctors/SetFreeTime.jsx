import React, { useState } from "react";
import { FaClock, FaHourglassEnd, FaHourglassStart } from "react-icons/fa";
import DoctorLayout from "../../layouts/DoctorLayout";

const SetFreeTime = () => {
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [freeTimes, setFreeTimes] = useState([]);
    const [viewUpcoming, setViewUpcoming] = useState(false); // State to toggle upcoming free times

    // Convert 24-hour time to 12-hour format
    const convertTo12Hour = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        const suffix = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
        return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${suffix}`;
    };

    // Calculate total time in hours and minutes
    const calculateTotalTime = (start, end) => {
        const startDate = new Date(`2024-01-01T${start}`);
        const endDate = new Date(`2024-01-01T${end}`);
        const totalMinutes = Math.floor((endDate - startDate) / (1000 * 60));
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return { hours, minutes };
    };

    const handleSave = () => {
        if (date && startTime && endTime) {
            const { hours, minutes } = calculateTotalTime(startTime, endTime);

            if (hours >= 0 && minutes >= 0) {
                setFreeTimes([
                    ...freeTimes,
                    {
                        date,
                        startTime: convertTo12Hour(startTime),
                        endTime: convertTo12Hour(endTime),
                        total: `${hours > 0 ? `${hours} hr ` : ""}${minutes > 0 ? `${minutes} min` : ""
                            }`,
                    },
                ]);
                setStartTime("");
                setEndTime("");
            } else {
                alert("End time must be after start time.");
            }
        } else {
            alert("Please fill in all fields.");
        }
    };

    const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format
    const todayFreeTimes = freeTimes.filter((ft) => ft.date === today);
    const upcomingFreeTimes = freeTimes.filter((ft) => ft.date > today);

    return (
        <DoctorLayout>
            <div className="w-11/12 m-auto mt-8">
                <div className="flex gap-10">
                    {/* Form Section (40%) */}
                    <div className="w-2/5 bg-white border-2 border-gray-200 shadow-sm  rounded-lg p-6">
                        <h1 className="text-2xl text-gray-700 font-bold mb-6">Set Your Consultation Hours</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Date</label>
                            <input
                                type="date"
                                className="w-full border-gray-300 border rounded-md p-2"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                                Start Time
                            </label>
                            <input
                                type="time"
                                className="w-full border-gray-300 border rounded-md p-2"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">End Time</label>
                            <input
                                type="time"
                                className="w-full border-gray-300 border rounded-md p-2"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600 transition duration-200"
                            onClick={handleSave}
                        >
                            Save Consultation Hours
                        </button>
                    </div>

                    {/* Display Section (50%) */}
                    <div className="w-3/5 bg-white border-2 border-gray-200 shadow-sm rounded-lg p-6">
                        <h1 className="text-2xl text-gray-700 font-bold mb-6">Consultation Hours</h1>

                        {/* Today's Free Times */}
                        {!viewUpcoming && (
                            <>
                                <h2 className="text-xl font-semibold mb-4 text-gray-600">Today's Consultation Hours</h2>
                                <div className="h-64 overflow-y-auto space-y-2">
                                    {todayFreeTimes.length > 0 ? (
                                        todayFreeTimes.map((time, index) => (
                                            <div
                                                key={index}
                                                className="text-sm font-medium text-gray-700 flex justify-between items-center border-b pb-2"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <FaHourglassStart className="text-gray-500" />
                                                    <span className="text-gray-800">Start:</span> {time.startTime}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaHourglassEnd className="text-gray-500" />
                                                    <span className="text-gray-800">End:</span> {time.endTime}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaClock className="text-gray-500" />
                                                    <span className="text-gray-800">Total:</span> {time.total}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-orange-700">No consultation hours set for today.</p>
                                    )}
                                </div>
                                {upcomingFreeTimes.length > 0 && (
                                    <button
                                        className="mt-4 w-full bg-orange-200 text-gray-700 font-medium py-2 rounded-md hover:bg-orange-300 transition duration-200"
                                        onClick={() => setViewUpcoming(true)}
                                    >
                                        View upcoming Consultation Hours
                                    </button>
                                )}
                            </>
                        )}

                        {/* Upcoming Free Times */}
                        {viewUpcoming && (
                            <>
                                <h2 className="text-xl font-semibold mt-6 mb-4 text-teal-600">
                                    Upcoming consultation hour
                                </h2>
                                <div className="h-64 overflow-y-auto space-y-2">
                                    {upcomingFreeTimes.length > 0 ? (
                                        upcomingFreeTimes.map((time, index) => (
                                            <div
                                                key={index}
                                                className="text-sm font-medium text-gray-700 flex justify-between items-center border-b pb-2"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <FaHourglassStart className="text-gray-500" />
                                                    <span className="text-gray-800">Date:</span> {time.date}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaHourglassStart className="text-gray-500" />
                                                    <span className="text-gray-800">Start:</span> {time.startTime}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaHourglassEnd className="text-gray-500" />
                                                    <span className="text-gray-800">End:</span> {time.endTime}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaClock className="text-gray-500" />
                                                    <span className="text-gray-800">Total:</span> {time.total}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-600">No upcoming consultation hours set.</p>
                                    )}
                                </div>
                                <button
                                    className="mt-4 w-full bg-orange-200 text-gray-700 font-medium py-2 rounded-md hover:bg-orange-300 transition duration-200"
                                    onClick={() => setViewUpcoming(false)}
                                >
                                    Back to Today's Consultation Hours
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </DoctorLayout>
    );
};

export default SetFreeTime;
