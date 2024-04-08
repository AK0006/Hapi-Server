const { Long } = require('mongodb');
const User = require('../User');

exports.update_user = (request, h) => {
    try {
        const id = request.params.id;
        const payload = request.payload;
        const updateUser = User.findOneAndUpdate({_id: id}, payload);
        return updateUser;
    } catch (error) {
        return error;
    }
};