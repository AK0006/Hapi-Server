const Post = require('../Handler/Post');
const create = require('../Validation/post_validate');


module.exports = ({
    method: 'POST',
    path: '/user',
    options: {
        validate: create,
        tags: ['api'],
        auth: false
    },
    handler: Post.create_User
});    validate: {
        
}