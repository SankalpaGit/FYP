const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database'); // Import the configured sequelize instance
const RegisterDoctor = require('./models/RegisterDoctor'); // Import your model
const Admin = require('./models/Admin'); // Import the Admin model
const Doctor = require('./models/Doctor'); // Import the Admin model

const doctorRoutes = require('./routes/doctorRegistrationRoutes'); // Import doctor authentication related routes
const cors = require('cors'); 
const adminLoginRoute = require('./routes/adminRoutes')
// Enable CORS for all routes and origins


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use of the route
app.use('/api', doctorRoutes); // Prefix with '/api' or any base URL 
app.use('/api', adminLoginRoute)

// Authenticate and sync models

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // Sync all models means create the database table
  })
  .then(() => {
    console.log('Models synced successfully.');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Chikitsakalaya server is running');
});

module.exports = app;
