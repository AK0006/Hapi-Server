const Gethandler = require('../Handler/Getall');

module.exports = {
    method: 'GET',
    path: '/user',
    handler: Gethandler.getAll
}