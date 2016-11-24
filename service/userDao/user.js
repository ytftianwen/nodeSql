/**
 * Created by yangtaofeng on 2016/11/23.
 */
const Sequelize = require('sequelize');
const dbConfig = require('../db/dbConfig');

new Sequelize(
    dbConfig.dbName,
    dbConfig.dbUser,
    dbConfig.dbPW,
    {
        host: dbConfig.dbHost,
        dialect: dbConfig.dbType
    });

const User = new Sequelize({
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});

module.exports = User;