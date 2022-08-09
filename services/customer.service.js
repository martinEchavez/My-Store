const { models } = require('../libs/sequelize');

class CustomerServices {
  constructor() {
    this.customers = [];
  }

  async findCustomers() {
    return await models.Customer.findAll();
  }
  async findCustomer(id) {
    return await models.Customer.findByPk(id);
  }
}

module.exports = CustomerServices;
