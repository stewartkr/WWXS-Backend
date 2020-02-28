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
  Message: sequelize.import('./message')
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { sequelize, models, databaseConfig };
