// Importing the module or library 
const express = require('express');
const dotenv = require('dotenv');

// Load the environment variables
dotenv.config();

// Setup express variables
const app = express();

// Middleware to parse the json data 
app.use(express.json());

//testing route
app.get('/', (req,res)=>{
    res.send('Chikitsakalaya server is running');
})

// xport of the Express app
module.exports = app;