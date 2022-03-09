const { Sequelize } = require('sequelize');
const { config: { dbHost, dbPort, dbUser, dbPassword, dbDataBase } } = require('./../config');
const setupModels = require('./../db/models');


const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbDataBase}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
