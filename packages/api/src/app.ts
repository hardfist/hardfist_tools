import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import console = require('console');

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({});
const opts: fastify.RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
};

server.get('/ping', opts, (request, resp) => {
  resp.code(200).send({
    pong: 'it worked'
  });
});
server.listen(3000, err => {
  if (err) {
    throw err;
  }
  console.log(`server listening on http://localhost:3000`);
});
