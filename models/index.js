const sequelize = require("../bin/dbConfig");
const users = require("./definations/users");
const roles = require("./definations/roles");
const sessions = require("./definations/session");

const models = { users, roles, sessions };
roles.hasMany(users, { foreignKey: "roleId" }); //1.M relation between user and role
users.belongsTo(roles, { foreignKey: "roleId" });

users.hasOne(users, { foreignKey: "userId" }); //1:1 relation btw users and sessions
sessions.belongsTo(users, { foreignKey: "userId" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
