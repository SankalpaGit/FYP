const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Doctor } = require('../models/doctor'); // Assuming your Doctor model is in 'models'
const upload = require('../config/multer'); // For file uploads

// Register a new doctor
router.post('/register', upload.single('licenseCertificate'), async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, licenseNumber } = req.body;

    // Validate password and confirm password
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if doctor with the same email or license number already exists
    const existingDoctor = await Doctor.findOne({ where: { email } });
    if (existingDoctor) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    const existingLicense = await Doctor.findOne({ where: { licenseNumber } });
    if (existingLicense) {
      return res.status(400).json({ error: 'License number is already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new doctor
    const doctor = await Doctor.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      licenseNumber,
      profilePicture: req.file ? req.file.path : null, // Path of the uploaded license certificate
      isVerified: false // Admin will verify later
    });

    // Generate JWT Token for the doctor
    const token = jwt.sign({ id: doctor.id, email: doctor.email }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(201).json({
      message: 'Registration successful, awaiting admin approval',
      token,
      doctor: { firstName, lastName, email, licenseNumber, isVerified: doctor.isVerified }
    });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
