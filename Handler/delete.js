const { Long } = require('mongodb');
const User = require('../User');


exports.delete_user = (request, h) => {
    try {
        const id = request.params.id;
        // return id;
        const deleteuser = User.findOneAndDelete({_id: id});
        return deleteuser;
    } catch (error) {
        return error;
    }
};