const express = require('express');
const router = express.Router();
const users = require('./users.router');
const products = require('./products.router');
const categories = require('./categories.router');
const customers = require('./customers.router');

const routes = (app) => {
  app.use('/api/v1', router);
  router.use('/users', users);
  router.use('/products', products);
  router.use('/categories', categories);
  router.use('/customers', customers);
};

module.exports = routes;
