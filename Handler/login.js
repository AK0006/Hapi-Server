const User = require('../User');
const Boom =  require('@hapi/boom');
const bcrypt = require('bcrypt');
const Post = require('./Post');
const { payload } = require('../Validation/post_validate');
const { valid } = require('joi');
const create_token =require('../util/config')

exports.login = async (request, h) => {
    const { username, password } = request.payload;
    try {
        const user = await User.findOne({ username });
        if(!user){
            return Boom.badRequest("User not found")
         } 
        const passwordMatch = await bcrypt.compare(password, user.password);
       
        if(!passwordMatch) {
           return Boom.badRequest("Invalid Password");
        }
        
        const session = {
            valid: true,
            user: user._id
        }

        const token = await create_token(session);
        console.log(token);
        return token;
    } catch (error) {
        return error;
    }
};