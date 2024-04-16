const User = require('../User');
const { payload } = require('../Validation/post_validate');

exports.login = async (request, h) => {
    // const payload = request.payload;
    // const user = await User.findByusername({username, password}, payload);
    return "Welcome to my restricted page";
};