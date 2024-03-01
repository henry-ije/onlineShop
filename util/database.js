const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sirhenz@1996', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
