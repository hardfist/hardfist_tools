
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var fastify_1 = __importDefault(require('fastify'));
var console = require('console');
var server = fastify_1.default({});
var opts = {
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
server.get('/ping', opts, function(request, resp) {
  resp.code(200).send({
    pong: 'it worked'
  });
});
server.listen(3000, function(err) {
  if (err) {
    throw err;
  }
  console.log('server listening on http://localhost:3000');
});
