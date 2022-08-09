const express = require('express');
const router = express.Router();
const CustomerServices = require('../services/customer.service');

const service = new CustomerServices();

router.get('/', async (req, res) => {
  try {
    const customers = await service.findCustomers();
    res.status(200).json(customers);
  } catch (error) {
    console.log(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const customer = await service.findCustomer(id)
    res.status(200).json(customer);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
