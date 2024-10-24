// routes/adminRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin'); // Import the Admin model
const router = express.Router();

// Admin login route
router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the admin exists in the database
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the hashed password
    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email }, // Payload
      process.env.JWT_SECRET, // Secret key from .env
      { expiresIn: '1h' } // Token expiry time
    );

    // Send success response with JWT
    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to verify if an admin email exists
router.post('/admin/verify-email', async (req, res) => {
    const { email } = req.body;
  
    try {
      // Check if the email exists in the Admin table
      const admin = await Admin.findOne({ where: { email } });
      if (admin) {
        return res.json({ exists: true });
      } else {
        return res.json({ exists: false });
      }
    } catch (err) {
      console.error('Error verifying email:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
