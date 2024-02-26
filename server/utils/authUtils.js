const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, process.env.A, { expiresIn: jwtConfig.access.expiresIn }),
  refreshToken: jwt.sign(payload, process.env.R, { expiresIn: jwtConfig.refresh.expiresIn }),
});

module.exports = { generateTokens };
