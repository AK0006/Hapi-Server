// const Deletehandler = require('../Handler/Delete_handler');
const Deletehandler = require('../Handler/delete');

// Delete
module.exports = ({
    method: 'DELETE',
    path: '/user/{id}',
    handler: Deletehandler.delete_user
});