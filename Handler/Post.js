const { ReturnDocument } = require('mongodb');
const User = require('../User');

exports.create_User = async (request, h) => {
    try {
        const payload = request.payload;
        const result = await User.create(payload);
        return h.response(result);
    } catch (e) {
        throw e
    }
};