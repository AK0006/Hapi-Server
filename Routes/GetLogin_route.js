const Login = require("../Handler/getlogin")


module.exports = {
    method: 'GET',
    path: '/user/login',
    handler: Login.login,
    options: {
        auth: 'login',
        
    }
}