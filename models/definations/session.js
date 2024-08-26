const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConfig");
const users = require("./users");

class session extends Model {}
session.init(
  {
    sessionId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    userId: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
      references: {
        model: users,
        key: "userId",
      },
      token: {
        type: DataTypes.ENUM,
        values: ["Instructor", "Admin", "Trainee"],
        allowNull: false,
      },
    },
  },
  {
    timestamps: true,

    modelName: "session",
    sequelize,
  }
);

module.exports = session;
