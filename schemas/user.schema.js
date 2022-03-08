const Joi = require('Joi');

const id = Joi.string().uuid();
const name = Joi.string().min(1).max(50);
const email = Joi.string().email();
const password = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  name,
  email,
  password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
}
