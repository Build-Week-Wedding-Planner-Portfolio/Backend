const jwt = require("jsonwebtoken");

const secrets = require("../api/secrets.js");

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const secret = secrets.jwtSecret;

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, secret, options);
}