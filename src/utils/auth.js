const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'secret-key', { expiresIn: '1h' });
  return token;
};

module.exports = {
  generateToken
};
