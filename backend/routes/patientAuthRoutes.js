// routes/patientAuth.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient'); 
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  
  try {
    // Check if email already exists
    const existingPatient = await Patient.findOne({ where: { email } });
    if (existingPatient) return res.status(400).json({ message: 'Email already in use' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create patient
    const patient = await Patient.create({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });

    res.status(201).json({ message: 'Registration successful', patient });
  } catch (error) {
    res.status(500).json({ message: 'Error registering patient', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find patient
    const patient = await Patient.findOne({ where: { email } });
    if (!patient || !patient.password) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ id: patient.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

module.exports = router;
