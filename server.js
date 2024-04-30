'use strict';

const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const { Db } = require("mongodb");
const User = require("./User");
const Jwt = require('@hapi/jwt');
const { payload } = require("./Validation/post_validate");
const { verify } = require("jsonwebtoken");
const Login = require("./Handler/login");
const jwt_private_key = require('./util/config');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Pack = require('./package.json');
const { plugin } = require("./new");
const {createClient} = require('redis');
const { func } = require("joi");


// const client = createClient();
// console.log(client);
// client.on('error',err => console.log('Redis Client Eroor', err));

// client.connect();

mongoose.connect("mongodb://localhost/HapiServer");
const server =  Hapi.Server({
    port: 4000, 
    host: "localhost"
});


    const validate = async (artifacts, request, h) => {
        // console.log(artifacts);
        const payload = artifacts.decoded.payload;
        console.log(payload);
        const user = await User.findOne({_id: payload.user});
        console.log(user);
        if(!user){
            return {isValid: false}
        } return {
            isValid: true,
            Credential: {name: user.name, id: user._id}
        }
    };


   const init = async () => {

    const swaggerOptions = {
        info: {
            title:'Test API Documentation',
            version: Pack.version,
        },
        schemes: ['http', 'https']
    }

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ])
    await server.register(Jwt);
    server.auth.strategy('jwt', 'jwt', {
        keys: jwt_private_key,
        verify: false,
        validate,
    });

    server.auth.default('jwt');
    server.start();
    console.log('Server is running on %s', server.info.uri);
};
init();

    server.route(require('./Routes/Post_route'));
    server.route(require('./Routes/delete_route'));
    server.route(require('./Routes/Put_route'));
    server.route(require('./Routes/Getall_route'));
    server.route(require('./Routes/GetOne_route'));
    server.route(require('./Routes/Login_route'));


    // server.route({
    //     method: 'POST',
    //     path: '/user/login',
    //     handler: Login.login,
    //     options: {
    //         auth: 'jwt'
    //     }
    // });



