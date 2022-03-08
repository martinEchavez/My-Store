const Joi = require('Joi');

const productId = Joi.string().uuid();
const productName = Joi.string().min(3).max(50);
const category = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  productName: productName.required(),
  category: category.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  productName,
  category,
  price,
  image,
});

const getProductSchema = Joi.object({
  productId: productId.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
