/**
 * Created by yangtaofeng on 2016/11/23.
 */
const Sequelize = require('sequelize');
const dbConfig = require('../db/dbConfig');

let sequelize = new Sequelize(
    dbConfig.dbName,
    dbConfig.dbUser,
    dbConfig.dbPW,
    {
        host: dbConfig.dbHost,
        dialect: dbConfig.dbType
    });
let User = sequelize.define('user', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});


// const User = new Sequelize({
//     name: Sequelize.STRING,
//     age: Sequelize.INTEGER
// });

module.exports = User;