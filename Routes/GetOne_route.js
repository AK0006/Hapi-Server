const GetOnehandler = require('../Handler/GetOne')

module.exports = {
    method: 'GET',
    path: '/user/{id}',
    handler: GetOnehandler.getOne
}