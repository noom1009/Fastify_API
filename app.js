const fastify = require('fastify')({
    logger: true
  });
require('dotenv').config();
const PORT = process.env.PORT;
fastify.register(require('./routers/items'))
fastify.register(require('fastify-swagger'),{
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Document API',
      description: 'Fastify swagger API',
      version: '0.1.0'
    },
  }
})
  const start = async () => {
    try {
      await fastify.listen(PORT)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()