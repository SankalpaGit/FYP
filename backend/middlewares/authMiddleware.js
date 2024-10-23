// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const secretKey = process.env.JWT_SECRET; // Retrieve the secret key from the .env file

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token from 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey); // Verify the token
    req.user = decoded; // Attach the decoded token data to the request object
    next(); // Pass the request to the next middleware/route handler
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

module.exports = verifyToken;
