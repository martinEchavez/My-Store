const express = require('express');
const products = require('./products.router');
const router = express.Router();

const routes = (app) => {
  app.use('/api/v1', router);
  router.use('/products', products);
};

module.exports = routes;
