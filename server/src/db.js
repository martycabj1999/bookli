const path = require('path');
const Sequelize = require('sequelize');

const inTest = process.env.NODE_ENV === 'test';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: inTest ? false : console.log,
    storage: inTest
        ? ':memory:'
        : path.join(__dirname, '..', 'database.sqlite'),
});

module.exports = sequelize;
