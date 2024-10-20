const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const RegisterDoctor = require('../models/RegisterDoctor');
const hashPassword = require('../utils/hashPassword');
const generateToken = require('../utils/jwtToken');
const verifyToken = require('../middlewares/authMiddleware');
const bcrypt = require('bcrypt');


// POST route to register doctor with file upload
router.post('/doctors/register', async (req, res, next) => {
  try {
    const { email, password, licenceNumber } = req.body;

    // Validate email and other fields before uploading the file
    if (email) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Proceed to file upload if validations pass
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error during registration' });
  }
}, upload.single('licenceDocument'), async (req, res) => {
  try {
    const { email, password, licenceNumber } = req.body;
    const licenceDocument = req.file ? req.file.path : null;

    if (!licenceDocument) {
      return res.status(400).json({ error: 'Licence document is required' });
    }

    // Hash the password before storing it
    const hashedPassword = await hashPassword(password);

    const newDoctor = await RegisterDoctor.create({
      email,
      password: hashedPassword,
      licenceNumber,
      licenceDocument,
      status: 'pending'
    });

    res.status(201).json({ message: 'Registration submitted for approval', doctor: newDoctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error during registration' });
  }
});


// GET route to list all doctors (for admin to view)
router.get('/doctors/all', async (req, res) => {
  try {
    const doctors = await RegisterDoctor.findAll();
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching doctors' });
  }
});

// PUT route to approve a doctor (admin)
router.put('/doctor/approve/:id', verifyToken, async (req, res) => {
  try {
    const doctor = await RegisterDoctor.findByPk(req.params.id);

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    // Only approve if the doctor is currently pending
    if (doctor.status !== 'pending') {
      return res.status(400).json({ error: `Doctor is already ${doctor.status}.` });
    }

    // Set doctor status to approved
    doctor.status = 'approved';
    await doctor.save();

    res.json({ message: 'Doctor approved successfully', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error approving doctor' });
  }
});

// PUT route to reject a doctor (admin)
router.put('/doctor/reject/:id', async (req, res) => {
  try {
    const doctor = await RegisterDoctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    doctor.status = 'rejected';
    await doctor.save();
    res.json({ message: 'Doctor rejected', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error rejecting doctor' });
  }
});

router.post('/doctors/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the doctor by email
    const doctor = await RegisterDoctor.findOne({ where: { email } });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    // Check if the doctor is approved
    if (doctor.status !== 'approved') {
      return res.status(403).json({ error: 'Doctor not approved' });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = generateToken(doctor);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error during login' });
  }
});


module.exports = router;
