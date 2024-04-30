const { ReturnDocument } = require('mongodb');
const Bcrypt = require('bcrypt');
const User = require('../User');
const { payload } = require('../Validation/post_validate');
const { object } = require('joi');
const saltRounds = 10;

exports.create_User = async (request, h) => {
    const { password, ...rest } = request.payload
    try {

        const salt = await Bcrypt.genSalt(saltRounds);
        const hashPassword = await Bcrypt.hash(password, salt);
        // console.log(password);
        console.log(hashPassword);
        const data = Object.assign(rest, {password: hashPassword})
        console.log(data);
        
        const result = await User.create(data)
        return h.response(result);
    } catch (e) {
        throw e
    }
};