const express = require('express');
const router = express.Router();
const ProductsServices = require('./../services/product.service');
const { validatorHandler } = require('./../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.schema');

const service = new ProductsServices();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  (req, res, next) => {
    try {
      const { id } = req.params;
      const product = service.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  (req, res, next) => {
    try {
      const body = req.body;
      const product = service.create(body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = service.update(id, body);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const productId = service.delete(id);
    res.status(200).json(productId);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
