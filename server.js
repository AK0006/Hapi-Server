const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const { Db } = require("mongodb");


mongoose.connect("mongodb://localhost/HapiServer");

    const server = Hapi.Server({
        port: 4000,
        host: "localhost"
    });
    server.route(require('./Routes/Post_route'));
    server.route(require('./Routes/delete_route'));
    server.route(require('./Routes/Put_route'));
    server.route(require('./Routes/Getall_route'));
    server.route(require('./Routes/GetOne_route'));

    server.start();
    console.log('Server is running on %s', server.info.uri);


module.exports = server;

