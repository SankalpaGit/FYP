const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Store this in a secure place like environment variables

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    secretKey,
    { expiresIn: '1h' } // Token expires in 1 hour
  );
};

module.exports = generateToken;
