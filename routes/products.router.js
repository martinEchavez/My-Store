const express = require('express');
const router = express.Router();
const ProductsServices = require('../services/product.service');

const service = new ProductsServices();

router.get('/', (req, res) => {
  try {
    const products = service.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const product = service.findOne(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.post('/', (req, res) => {
  try {
    const body = req.body;
    const product = service.create(body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const productId = service.delete(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
