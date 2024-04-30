const jwt = require('jsonwebtoken');
const secret = require('./secret');
const { create } = require('../User');

function createToken(user) {
    return jwt.sign(user, secret, {
        algorithm: 'HS256',
        expiresIn: '7d'
    });
}

module.exports = createToken;