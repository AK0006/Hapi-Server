// 'use strict';

// const HapiAuthJwt2 = require('hapi-auth-jwt2');
// const Boom = require('@hapi/boom');
// const redis_client = require('./util/redis_client');
// const jwt_private_key = require('./util/secrets');
// const UserModel = require('../users/schemas/users');
// const ProfileModel = require('../profiles/schemas/profiles');
// const validate = async function(decoded, request, h) {
//   try {
//     const redis_reply = await redis_client.get(decoded.id);
//     // check if the `session` exists into redis.
//     if (!redis_reply) {
//       return { isValid: false };
//     }
//     // parse session info.
//     const session = JSON.parse(redis_reply);
//     // check if the session is valid or not.
//     if (session.valid === true) {
//       const result = await UserModel.findOne(
//         { _id: session.user },
//         { email: 1, name: 1, email_verified: 1, institutionId: 1, roles: 1, disabled: 1, profile_id: 1 }
//       );
//       if (!result) { 
//         return { isValid: false };
//       }
//       // set credentials info.
//       return {
//         isValid: true,
//         credentials: Object.assign(result, { role: result.roles, sessionId: decoded.id, id : result._id })
//       };
//     }
//     return { isValid: false };
//   } catch (e) {
//     return Boom.badRequest('validate function err ', e);
//   }
// };
// exports.plugin = {
//   name: 'auth',
//   version: '1.0.0',
//   register: (server, options) => {
//     server.register(HapiAuthJwt2);
//     server.auth.strategy('jwt', 'jwt', {
//       key: jwt_private_key,
//       validate,
//       verifyOptions: { algorithms: ['HS256'] }
//     });
//   }
// };