// models to store registration data for doctor before getting approved

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path based on your project structure

// Define the RegisterDoctor model
const RegisterDoctor = sequelize.define('RegisterDoctor', {
  // Email (Gmail)
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  // Password
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 100], // Minimum password length is 6
    },
  },
  // Licence Number
  licenceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [8, 20], // Adjust the length as per your requirements
    },
  },
  // Licence Document (file path stored in the database)
  licenceDocument: {
    type: DataTypes.STRING, // Store the file path of the uploaded document
    allowNull: false,
  },
  // Status to track if the doctor is approved or pending
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending', // Initially, the status will be pending
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Sync the model with the database (creates the table if it doesn't exist)
RegisterDoctor.sync();

module.exports = RegisterDoctor;