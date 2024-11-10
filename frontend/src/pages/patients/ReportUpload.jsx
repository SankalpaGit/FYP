import React, { useState } from 'react';
import { FaUpload, FaEye } from 'react-icons/fa'; // Import icons from react-icons


const ReportUpload = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile(fileUrl);
      setFileType(file.type); // Set the file type for conditional rendering
    }
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-700">
      <p className="text-4xl font-bold mb-8 text-white">
        Upload the images or PDFs
      </p>

      <div className="flex space-x-4 items-center  w-3/12 h-3/6">
        <label
          htmlFor="file-input"
          className="cursor-pointer flex flex-col items-center justify-center w-full h-full  m-auto bg-white text-teal-700 rounded-md shadow-md hover:bg-teal-600 hover:text-white transition-all"
        >
          <FaUpload className="text-4xl mb-2" /> {/* Icon at the top */}
          <span className="text-sm">Upload File</span> {/* Text below the icon */}
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*,application/pdf"  // Accept images and PDFs
          onChange={handleFileChange}
          className="hidden"
        />

        {selectedFile && (
          <FaEye
            className="text-4xl text-white cursor-pointer hover:text-teal-300 transition-all"
            onClick={toggleModal}
          />
        )}
      </div>

      {/* Modal to preview the file */}
      {isModalOpen && selectedFile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-teal-700 text-2xl font-bold hover:text-teal-600"
              onClick={toggleModal}
            >
              X
            </button>

            {/* Render preview based on file type */}
            {fileType.includes("image") ? (
              <img src={selectedFile} alt="Preview" className="max-w-full max-h-96 mx-auto" />
            ) : fileType === "application/pdf" ? (
              <iframe
                src={selectedFile}
                title="PDF Preview"
                className="w-full h-96"
              />
            ) : (
              <p className="text-center">Cannot preview this file type.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportUpload
