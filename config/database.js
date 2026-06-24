require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
  DB_HOST = 'localhost',
  DB_PORT = '3306',
  DB_NAME = 'campbread',
  DB_USER = 'root',
  DB_PASSWORD = ''
} = process.env;

const isLocalhost = DB_HOST === 'localhost' || DB_HOST === '127.0.0.1';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  },
  ...(isLocalhost ? {} : {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  })
});

module.exports = sequelize;

