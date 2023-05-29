const authController = require('../../controllers/auth');
const { generateToken } = require('../../utils/auth');

module.exports = {
  signup: async function({ userInput }, req) {
    const user = await authController.signup(userInput);
    const token = generateToken(user.id); 
    console.log("toke",token)
    return { ...user, password: null, token };
  },
  login: async function({ email, password }) {
    return await authController.login({ email, password });
  }
};
