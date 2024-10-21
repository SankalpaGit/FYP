// config/multer.js

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Directory where files will be saved
const uploadDirectory = 'uploads/';

// Ensure the uploads directory exists, or create it
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory); // Folder where files will be saved
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const filename = file.fieldname + '-' + timestamp + ext; // Unique filename with timestamp
    cb(null, filename);
  }
});

// File validation (only PDF or image files)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Invalid file type. Only PDF and image files are allowed.'), false); // Reject the file
  }
};

// Configure multer with storage engine, file size limit, and file filter
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit
  fileFilter: fileFilter,
});

// Handle errors in file upload
upload.handleFileUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A multer-specific error occurred
    return res.status(400).json({ error: err.message });
  } else if (err) {
    // An unknown error occurred when uploading
    return res.status(400).json({ error: err.message });
  }
  next();
};

module.exports = upload;
