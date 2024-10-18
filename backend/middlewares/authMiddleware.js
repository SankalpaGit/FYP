// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key (can be stored in environment variables)

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization'); // The token should be sent in the Authorization header

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
