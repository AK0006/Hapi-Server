const GetOnehandler = require('../Handler/GetOne');
const get_one = require("../Validation/getOne_validation")

module.exports = {
    method: 'GET',
    path: '/user/{id}',
    options: {
        validate: get_one
    },
    handler: GetOnehandler.getOne
}