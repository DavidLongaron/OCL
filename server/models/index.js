/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  dialect: 'postgres',
};

const sequelize = new Sequelize('ocl', 'postgres', 'codeworks123', config);
const db = {};

const files = fs.readdirSync(__dirname);

// eslint-disable-next-line no-restricted-syntax
for (const file of files) {
  if (file !== 'index.js') {
    // eslint-disable-next-line import/no-dynamic-require
    // eslint-disable-next-line global-require
    // eslint-disable-next-line import/no-dynamic-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

// eslint-disable-next-line no-restricted-syntax
for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
