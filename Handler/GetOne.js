const User = require('../User');

exports.getOne = (request, h) => {
    try {
        const id = request.params.id;
        const readOne = User.findOne({_id: id});
        return readOne;
    } catch (error) {
        return error;
    }
}