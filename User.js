const { number } = require('joi');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("Asif", salt);

const user = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('user', user);