import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck, FaTimes, FaEye, FaExclamationTriangle } from 'react-icons/fa';
import AdminLayout from '../../layouts/AdminLayout';

const DoctorApproval = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentDocument, setCurrentDocument] = useState(null);
    const [selectedDoctors, setSelectedDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const timeoutId = setTimeout(() => setLoading(false), 2000);
                const response = await axios.get('http://localhost:5000/api/doctors/all');
                const pendingDoctors = response.data.filter(doctor => doctor.status === 'pending');
                setDoctors(pendingDoctors);
                setLoading(false);
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

    const handleSelectDoctor = (id) => {
        setSelectedDoctors(prevSelected =>
            prevSelected.includes(id) ? prevSelected.filter(docId => docId !== id) : [...prevSelected, id]
        );
    };

    const handleSelectAll = () => {
        setSelectedDoctors(doctors.length === selectedDoctors.length ? [] : doctors.map(doc => doc.id));
    };

    return (
        <AdminLayout>
            <div className="p-4">
                {error ? (
                    <div className="flex flex-col items-center text-red-500 w-2/4 m-auto mt-10">
                        <FaExclamationTriangle className="text-red-600 text-9xl mb-4" />
                        <p className="text-center font-semibold text-lg">{error}</p>
                    </div>
                ) : (
                    <table className="min-w-full rounded-lg border">
                        {!loading && (
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 ">
                                    <th className="px-6 py-3 border border-gray-300">
                                        <input
                                            type="checkbox"
                                            onChange={handleSelectAll}
                                            checked={selectedDoctors.length === doctors.length}
                                        />
                                    </th>
                                    <th className="px-6 py-3 border border-gray-300">ID</th>
                                    <th className="px-6 py-3 border border-gray-300">Email</th>
                                    <th className="px-6 py-3 border border-gray-300">Licence Number</th>
                                    <th className="px-6 py-3 border border-gray-300 text-center">Licence Document</th>
                                    <th className="px-6 py-3 border border-gray-300">Status</th>
                                    <th className="px-6 py-3 border border-gray-300 text-center">Action</th>
                                </tr>
                            </thead>
                        )}
                        <tbody>
                            {loading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index} className="animate-pulse">
                                        <td className="border px-6 py-4"><div className="h-4 bg-gray-300 rounded"></div></td>
                                        <td className="border px-6 py-4"><div className="h-4 bg-gray-300 rounded"></div></td>
                                        <td className="border px-6 py-4"><div className="h-4 bg-gray-300 rounded"></div></td>
                                        <td className="border px-6 py-4"><div className="h-4 bg-gray-300 rounded"></div></td>
                                        <td className="border px-6 py-4"><div className="h-4 bg-gray-300 rounded"></div></td>
                                        <td className="border px-6 py-4"><div className="h-4 bg-gray-300 rounded"></div></td>
                                        <td className="border px-6 py-4"><div className="h-4 bg-gray-300 rounded"></div></td>
                                    </tr>
                                ))
                            ) : (
                                doctors.map((doctor, index) => (
                                    <tr key={doctor.id} className="hover:bg-gray-100 transition">
                                        <td className="border px-6 py-4 text-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedDoctors.includes(doctor.id)}
                                                onChange={() => handleSelectDoctor(doctor.id)}
                                            />
                                        </td>
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
                                        <td className="border px-6 py-4 text-center flex space-x-2 justify-center">
                                            <button
                                                className="text-green-600 hover:text-green-800 py-1"
                                                title="Accept"
                                            >
                                                <FaCheck />
                                            </button>
                                            <button
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
                )}

                {!loading && doctors.length === 0 && !error && (
                    <p className="mt-4 text-gray-500">No pending doctor requests</p>
                )}

                {modalOpen && (
                    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
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