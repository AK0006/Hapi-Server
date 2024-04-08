// const Puthandler = require('../Handler/Put_handler');
const Puthandler = require('../Handler/Put');
const put = require('../Validation/put_validation')

module.exports = {
    method: 'PUT',
    path: '/user/{id}',
    options: {
        validate: put,
    },
    handler: Puthandler.update_user
}