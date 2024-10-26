import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck, FaTimes, FaEye } from 'react-icons/fa';
import AdminLayout from '../../layouts/AdminLayout';

const DoctorApproval = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentDocument, setCurrentDocument] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                // Simulate a delay for loading
                const timeoutId = setTimeout(() => setLoading(false), 2000); // 2 seconds delay

                const response = await axios.get('http://localhost:5000/api/doctors/all');
                const pendingDoctors = response.data.filter(doctor => doctor.status === 'pending');
                setDoctors(pendingDoctors);
                setLoading(false);

                // Clear the timeout if the fetch is successful
                clearTimeout(timeoutId);
            } catch (err) {
                setError('Failed to fetch doctors');
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    const handleViewDocument = (document) => {
        setCurrentDocument(document);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentDocument(null);
    };

    if (error) return <p>{error}</p>;

    return (
        <AdminLayout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Doctor Approval List</h1>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-teal-600 text-white">
                            <th className="px-6 py-3 border border-gray-300">ID</th>
                            <th className="px-6 py-3 border border-gray-300">Email</th>
                            <th className="px-6 py-3 border border-gray-300">Licence Number</th>
                            <th className="px-6 py-3 border border-gray-300 text-center">Licence Document</th>
                            <th className="px-6 py-3 border border-gray-300">Status</th>
                            <th className="px-6 py-3 border border-gray-300 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <tr key={index}>
                                    <td className="border px-6 py-4">
                                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                    </td>
                                    <td className="border px-6 py-4">
                                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                    </td>
                                    <td className="border px-6 py-4">
                                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                    </td>
                                    <td className="border px-6 py-4 text-center">
                                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                    </td>
                                    <td className="border px-6 py-4">
                                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                    </td>
                                    <td className="border px-6 py-4 text-center">
                                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            doctors.map((doctor, index) => (
                                <tr key={doctor.id} className="hover:bg-gray-100">
                                    <td className="border px-6 py-4 text-center">{index + 1}</td>
                                    <td className="border px-6 py-4">{doctor.email}</td>
                                    <td className="border px-6 py-4">{doctor.licenceNumber}</td>
                                    <td className="border px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleViewDocument(doctor.licenceDocument)}
                                            className="text-blue-600 flex items-center justify-center mx-auto"
                                        >
                                            <FaEye className="mr-1" />
                                            <span className="hidden sm:inline">View</span>
                                        </button>
                                    </td>
                                    <td className="border px-6 py-4">{doctor.status}</td>
                                    <td className="border py-5 flex justify-center gap-3">
                                        <button
                                            onClick={() => handleAccept(doctor.id)}
                                            className="text-green-600 hover:text-green-800"
                                            title="Accept"
                                        >
                                            <FaCheck />
                                        </button>
                                        <button
                                            onClick={() => handleReject(doctor.id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Reject"
                                        >
                                            <FaTimes />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                {!loading && doctors.length === 0 && <p className="mt-4 text-gray-500">No pending doctor requests</p>}

                {/* Modal for document preview */}
                {modalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full">
                            <h2 className="text-xl font-semibold mb-4">Licence Document</h2>
                            <img
                                src={`http://localhost:5000/${currentDocument}`}
                                alt="Licence Document"
                                className="w-full h-auto"
                            />
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default DoctorApproval;
