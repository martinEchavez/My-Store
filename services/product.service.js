const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
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
    const responseQuery = await this.pool.query('SELECT * FROM products');
    return responseQuery.rows;
  }

  findOne(id) {
    const productFound = this.products.find((product) => product.id === id);
    if (!productFound) {
      throw boom.notFound('Product Not Found');
    }
    if (productFound.isBlock) {
      throw boom.conflict('Product is block');
    }
    return productFound;
  }

  update(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found');
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product Not Found');
    }

    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsServices;
