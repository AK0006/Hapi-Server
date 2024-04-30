const { config } = require("dotenv");
const Login = require("../Handler/login");
const { method } = require("./Post_route");


module.exports = {
    method: 'POST',
    path: '/login',
    handler: Login.login,
    options: {
        auth: false
    }
};