const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres'
  }
);

const eraseDatabaseOnSync = true;

const databaseConfig = {
  force: eraseDatabaseOnSync
};

const models = {
  User: sequelize.import('./user'),
  UserGroup: sequelize.import('./usergroup'),
  Buoy: sequelize.import('./buoy'),
  // Location: sequelize.import('./location'),
  Data: sequelize.import('./data')
};

module.exports = { sequelize, models, databaseConfig };
