const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  req.isAuth = true;
  req.userId = 8;
  next();
  return;
  
  const authHeader = req.get('Authorization');
  
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  
  const token = authHeader.split(' ')[1];
  let decodedToken;
  
  try {
    decodedToken = jwt.verify(token, 'somesupersecretkey');
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};
