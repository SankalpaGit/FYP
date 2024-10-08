const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your database connection

const Doctor = sequelize.define('Doctor', {
  id: {
    type: DataTypes.UUID, // Unique identifier for scalability
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'First name is required' },
      len: { args: [2, 50], msg: 'First name must be between 2 and 50 characters' },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Last name is required' },
      len: { args: [2, 50], msg: 'Last name must be between 2 and 50 characters' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Please provide a valid email address' },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Password is required' },
      len: { args: [8, 100], msg: 'Password must be at least 8 characters long' },
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: { msg: 'Phone number must be numeric' },
      len: { args: [10, 15], msg: 'Phone number must be between 10 and 15 digits' },
    },
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Specialization is required' },
    },
  },
  licenseNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: { msg: 'License number is required' },
      len: { args: [5, 20], msg: 'License number must be between 5 and 20 characters' },
    },
  },
  experienceYears: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: 'Experience years must be a valid number' },
      min: { args: [0], msg: 'Experience years cannot be negative' },
    },
  },
  qualification: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Qualification is required' },
    },
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: { msg: 'Address is required' },
    },
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true, // Optional, so it can be edited later
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Sync with the database (create the table if it doesn't exist)
Doctor.sync({ alter: true });

module.exports = Doctor;
