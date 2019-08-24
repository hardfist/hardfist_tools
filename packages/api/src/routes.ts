import { FastifyInstance } from 'fastify';

export async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    return {
      hello: 'world'
    };
  });
}
