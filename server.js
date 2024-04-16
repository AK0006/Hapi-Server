const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const { Db } = require("mongodb");
const User = require("./User");
const user = require('./Handler/getlogin')
const { payload } = require("./Validation/post_validate");


mongoose.connect("mongodb://localhost/HapiServer");

const validate = async (request, username, password, h) => {
    const payload = request.payload;
    const user = await User.findOne({username, password}, payload);

    if(!user){
        return {isValid: false};
    }return {isValid: true,
        credentials: {name: user.name}
    }
}

    const server = Hapi.Server({
        port: 4000, 
        host: "localhost"
    });
    server.start();
    console.log('Server is running on %s', server.info.uri);

    server.register(require("@hapi/basic"));
    server.auth.strategy('login', 'basic', {validate});

    server.route(require('./Routes/Post_route'));
    server.route(require('./Routes/delete_route'));
    server.route(require('./Routes/Put_route'));
    server.route(require('./Routes/Getall_route'));
    server.route(require('./Routes/GetOne_route'));
    server.route(require('./Routes/GetLogin_route'));


