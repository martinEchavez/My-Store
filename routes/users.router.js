const express = require('express');
const router = express.Router();
const UserServices = require('./../services/user.service');

const service = new UserServices();

router.get('/', async (req, res) => {
  try {
    const users = await service.findUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params
    const user = await service.findUser(id)
    res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
