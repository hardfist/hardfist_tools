import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { routes } from './routes';

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({
  logger: true
});
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
server.register(routes);

const start = async () => {
  try {
    await server.listen(3000);
    console.log('listen at http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
