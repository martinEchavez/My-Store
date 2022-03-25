const { models } = require('./../libs/sequelize');

class UserServices {
  constructor() {
    this.users = [];
  }

  async findUsers() {
    return await models.User.findAll();
  }
  async findUser(id) {
    return await models.User.findByPk(id);
  }
}

module.exports = UserServices;
