const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import your auth routes

dotenv.config();

const app = express();
app.use(express.json());

// Use the auth routes for authentication-related requests
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Chikitsakalaya server is running');
});

module.exports = app;
