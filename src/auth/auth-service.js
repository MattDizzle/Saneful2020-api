const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthService = {
  getUserWithUserEmail(db, user_email) {
    return db('saneful_user').where({ user_email }).first();
  },

  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash);
  },

  createJwt(subject, payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      subject,
      algorithm: 'HS256',
    });
  },

  verifyJwt(token) {
    return jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['HS256'],
    });
  },

  parseBasicToken(token) {
    return Buffer
      .from(token, 'base64')
      .toString()
      .split(':');
  },
};

module.exports = AuthService;
