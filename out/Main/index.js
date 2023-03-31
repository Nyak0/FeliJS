import Fastify from 'fastify';
import { feli } from './feli.js';
const fastify = Fastify({});
fastify.get('/', async (request, reply) => {
    reply.type('text/html');
    return `<img src="${feli.user.avatarURL()}" width="148"></img>I am ${feli.user.username}</p>`;
});
fastify.listen({ port: 3000 });
