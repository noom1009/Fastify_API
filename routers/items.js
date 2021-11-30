const { default: fastify } = require("fastify");
const { getItemOpts, getItemsOpts } = require('../models/items');

function itemRouters(fastify, option, done) {
  fastify.get('/items', getItemsOpts);

  fastify.get("/items/:id", getItemOpts);
  done();
}

module.exports = itemRouters;
