const { models } = require('../libs/sequelize');

class CategoryServices {
  constructor() {
    this.categories = [];
  }

  async findCategories() {
    return await models.Category.findAll();
  }
  async findCategory(id) {
    return await models.Category.findByPk(id);
  }
}

module.exports = CategoryServices;
