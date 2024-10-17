const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const RegisterDoctor = require('../models/RegisterDoctor');

// POST route to register doctor with file upload
router.post('/doctors/register', upload.single('licenceDocument'), upload.handleFileUploadError, async (req, res) => {
  try {
    const { email, password, licenceNumber } = req.body;
    const licenceDocument = req.file ? req.file.path : null;

    if (!licenceDocument) {
      return res.status(400).json({ error: 'Licence document is required' });
    }

    // Save the new doctor registration data to the database
    const newDoctor = await RegisterDoctor.create({
      email,
      password,
      licenceNumber,
      licenceDocument, // Save the file path in the database
      status: 'pending' // Initial status is 'pending' for admin approval
    });

    // Respond with success message and the new doctor data
    res.status(201).json({ message: 'Registration submitted for approval', doctor: newDoctor });
  } catch (error) {
    console.error('Error during doctor registration:', error);
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
router.put('/doctor/approve/:id', async (req, res) => {
  try {
    const doctor = await RegisterDoctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    doctor.status = 'approved';
    await doctor.save();
    res.json({ message: 'Doctor approved', doctor });
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

    // Compare the password
    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // At this point, the doctor is authenticated and approved
    // Generate a token (optional, you could use JWT for session management)
    res.status(200).json({ message: 'Login successful', doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error during login' });
  }
});

module.exports = router;
