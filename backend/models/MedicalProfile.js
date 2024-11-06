const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MedicalProfile = sequelize.define('MedicationProfile',{

});

module.exports = MedicalProfile; 