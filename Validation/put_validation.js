const Joi = require("joi");
const { Timestamp } = require("mongodb");

module.exports = {
    payload: Joi.object({
    
    id: Joi.string().required(),
    username: Joi.string().min(3).max(20).optional(),
    email: Joi.string(). email(). lowercase().optional(),
    password: Joi.string().min(6).optional()
})}