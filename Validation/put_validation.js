const Joi = require("joi");

module.exports = {
    payload: Joi.object({
    
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string(). email(). lowercase().required(),
    password: Joi.string().min(6).required()
})}