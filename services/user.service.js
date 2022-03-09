const { models } = require('./../libs/sequelize');

class UserServices {
  constructor() {
    this.users = [];
  }

  async findUsers() {
    return await models.User.findAll();
  }
}

module.exports = UserServices;
