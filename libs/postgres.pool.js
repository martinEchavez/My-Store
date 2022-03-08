const { Pool } = require('pg');
const { config: { dbHost, dbPort, dbUser, dbPassword, dbDataBase } } = require('./../config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbDataBase}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
