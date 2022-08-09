const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return await models.Product.findAll()
  }

  async findOne(id) {
    return await models.Product.findByPk(id);
  }

  update(id, changes) {

  }

  delete(id) {

  }
}

module.exports = ProductsServices;
