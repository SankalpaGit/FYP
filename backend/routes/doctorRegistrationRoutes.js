const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const RegisterDoctor = require('../models/RegisterDoctor');
const Doctor = require('../models/Doctor');
const hashPassword = require('../utils/hashPassword');
const generateToken = require('../utils/jwtToken');
const verifyToken = require('../middlewares/authMiddleware');
const bcrypt = require('bcrypt');


// POST route to register doctor with file upload
router.post('/doctors/register', upload.single('licenceDocument'), upload.handleFileUploadError, async (req, res) => {
  try {
    const { email, password, licenceNumber } = req.body;
    const licenceDocument = req.file ? req.file.path : null; // Get the uploaded file path

    console.log('Email received:', email);
    console.log('Password received:', password);
    console.log('Licence Number received:', licenceNumber);
    console.log('Licence Document received:', licenceDocument);

    // Validate the fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!password || password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    if (!licenceDocument) {
      return res.status(400).json({ error: 'Licence document is required' });
    }

     // Check if the email already exists
     const existingDoctor = await RegisterDoctor.findOne({ where: { email } });
     if (existingDoctor) {
       return res.status(409).json({ error: 'Email already registered' });
     }

    // Hash the password before storing it
    const hashedPassword = await hashPassword(password);

    // Save doctor registration
    const newDoctor = await RegisterDoctor.create({
      email,
      password: hashedPassword,
      licenceNumber,
      licenceDocument,
      status: 'pending'
    });

    // Respond with success
    return res.status(201).json({ message: 'Registration submitted for approval', doctor: newDoctor });

  } catch (error) {
    console.error(error);

     // Handle duplicate entry error
     if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email already registered' });
    }

    return res.status(500).json({ error: 'Error during registration' });
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
    const doctorRequest = await RegisterDoctor.findByPk(req.params.id);

    if (!doctorRequest) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    if (doctorRequest.status !== 'pending') {
      return res.status(400).json({ error: `Doctor is already ${doctorRequest.status}.` });
    }

    // Set doctor status to approved in RegisterDoctor model
    doctorRequest.status = 'approved';
    await doctorRequest.save();

    // Copy data to Doctor model
    const newDoctor = await Doctor.create({
      email: doctorRequest.email,
      password: doctorRequest.password, // Ensure password is hashed already
      licenseNumber: doctorRequest.licenceNumber,
      certificate: doctorRequest.licenceDocument,
      isApproved: true,
    });

    res.json({ message: 'Doctor approved successfully', doctor: newDoctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error approving doctor' });
  }
});

// PUT route to reject a doctor (admin)
router.put('/doctor/reject/:id', verifyToken, async (req, res) => {
  try {
    const doctorRequest = await RegisterDoctor.findByPk(req.params.id);

    if (!doctorRequest) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    doctorRequest.status = 'rejected';
    await doctorRequest.save();

    res.json({ message: 'Doctor rejected', doctor: doctorRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error rejecting doctor' });
  }
});


// POST route for login of doctor after approval
router.post('/doctor/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the doctor by email in the Doctor model
    const doctor = await Doctor.findOne({ where: { email } });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    // Check if the doctor is approved
    if (!doctor.isApproved) {
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

router.get('/doctors/approved', async (req, res) => {
  try {
    const approvedDoctors = await Doctor.findAll();
    res.json(approvedDoctors);
  } catch (error) {
    console.error('Error fetching approved doctors:', error);
    res.status(500).json({ error: 'Error fetching approved doctors' });
  }
});

module.exports = router;
