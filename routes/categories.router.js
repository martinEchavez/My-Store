const express = require('express');
const router = express.Router();
const CategoryServices = require('../services/category.service');

const service = new CategoryServices();

router.get('/', async (req, res) => {
  try {
    const categories = await service.findCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const category = await service.findCategory(id)
    res.status(200).json(category);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
