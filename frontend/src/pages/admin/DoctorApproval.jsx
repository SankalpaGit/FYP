// src/components/DoctorApproval.jsx
import React, { useEffect, useState } from 'react';
import { FaEye, FaExclamationTriangle, FaCheck, FaTimes } from 'react-icons/fa';
import AdminLayout from '../../layouts/AdminLayout';
import { fetchPendingDoctors } from '../../services/doctorListingService';
import { approveDoctor } from '../../services/approveDoctorService';
import { rejectDoctor } from '../../services/rejectDoctorService';

const DoctorApproval = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentDocument, setCurrentDocument] = useState(null);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setLoading(true);
        const pendingDoctors = await fetchPendingDoctors();
        setDoctors(pendingDoctors);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadDoctors();
  }, []);

  const handleViewDocument = (document) => {
    setCurrentDocument(document);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentDocument(null);
  };

  const handleApprove = async (id) => {
    try {
      await approveDoctor(id);
      setDoctors(doctors.filter(doc => doc.id !== id)); // Remove approved doctor from list
    } catch (error) {
      setError(error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectDoctor(id);
      setDoctors(doctors.filter(doc => doc.id !== id)); // Remove rejected doctor from list
    } catch (error) {
      setError(error.message);
    }
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
                  <th className="px-6 py-3 border border-gray-300">ID</th>
                  <th className="px-6 py-3 border border-gray-300">Email</th>
                  <th className="px-6 py-3 border border-gray-300">Licence Number</th>
                  <th className="px-6 py-3 border border-gray-300 text-center">Licence Document</th>
                  <th className="px-6 py-3 border border-gray-300">Status</th>
                  <th className="px-6 py-3 border border-gray-300 text-center">Actions</th>
                </tr>
              </thead>
            )}
            <tbody>
              {loading ? (
                <tr><td>Loading...</td></tr>
              ) : (
                doctors.map((doctor, index) => (
                  <tr key={doctor.id} className="hover:bg-gray-100 transition">
                    <td className="border px-6 py-4 text-center">{index + 1}</td>
                    <td className="border px-6 py-4">{doctor.email}</td>
                    <td className="border px-6 py-4">{doctor.licenceNumber}</td>
                    <td className="border px-6 py-4 text-center">
                      <button
                        onClick={() => handleViewDocument(doctor.licenceDocument)}
                        className="text-blue-600 flex items-center justify-center mx-auto"
                      >
                        <FaEye className="mr-1" />
                      </button>
                    </td>
                    <td className="border px-6 py-4">{doctor.status}</td>
                    <td className="border px-6 py-4 text-center">
                      <button onClick={() => handleApprove(doctor.id)} className="text-green-600 mx-1">
                        <FaCheck />
                      </button>
                      <button onClick={() => handleReject(doctor.id)} className="text-red-600 mx-1">
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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
