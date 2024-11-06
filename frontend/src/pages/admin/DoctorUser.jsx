import React from 'react'
import { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';

const DoctorUser = () => {

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApprovedDoctors = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/doctors/approved');
                setDoctors(response.data);
            } catch (err) {
                setError('Failed to load approved doctors');
            } finally {
                setLoading(false);
            }
        };

        fetchApprovedDoctors();
    }, []);

    if (loading) return <p>Loading approved doctors...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <AdminLayout>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Approved Doctors</h2>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600">
                            <th className="w-1/12 px-4 py-2 border border-gray-300">ID</th>
                            <th className="w-2/12 px-4 py-2 border border-gray-300">Email</th>
                            <th className="w-2/12 px-4 py-2 border border-gray-300">License Number</th>
                            <th className="w-3/12 px-4 py-2 border border-gray-300">Status</th>
                            <th className="w-3/12 px-4 py-2 border border-gray-300">Date Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.length > 0 ? (
                            doctors.map((doctor, index) => (
                                <tr key={doctor.id} className="text-center">
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">{doctor.email}</td>
                                    <td className="border px-4 py-2">{doctor.licenseNumber}</td>
                                    <td className="border px-4 py-2">{doctor.status}</td>
                                    <td className="border px-4 py-2">
                                        {new Date(doctor.updatedAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="border px-4 py-2 text-center text-gray-500">
                                    No approved doctors found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default DoctorUser
