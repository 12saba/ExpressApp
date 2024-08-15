const sequelize = require("../bin/dbConfig");
const users = require("./definations/users");

const models = { users };
const db = {};

db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
