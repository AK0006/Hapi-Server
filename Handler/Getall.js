const User = require('../User');

exports.getAll = (request, h) => {
    try {
        const readAll = User.find();
        return readAll;
    } catch (error) {
        return error;
    }
}