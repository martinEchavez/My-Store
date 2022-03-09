const express = require('express');
const products = require('./products.router');
const users = require('./users.router');
const router = express.Router();

const routes = (app) => {
  app.use('/api/v1', router);
  router.use('/products', products);
  router.use('/users', users);
  router.use('/orders', products);
  router.use('/categories', products);
};

module.exports = routes;
