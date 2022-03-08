const express = require('express');
const products = require('./products.router');
const router = express.Router();

const routes = (app) => {
  app.use('/api/v1', router);
  router.use('/products', products);
  router.use('/users', products);
  router.use('/orders', products);
  router.use('/categories', products);
};

module.exports = routes;
