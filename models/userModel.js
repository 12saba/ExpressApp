const { response } = require("express");
const { models } = require("./index");

module.exports = {
  getallUsers: async () => {
    try {
      const users = await models.users.findAll({
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["roleId", "role"],
          },
        ],
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return { response: user };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async ({ username, userId }) => {
    try {
      const user = await models.users.destroy({
        where: {
          //...() this means that we are using ternary operator in where clause
          ...(userId ? { userId: userId } : { username: username }),
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
  getUser: async ({ username, userId }) => {
    try {
      const user = await models.users.findOne({
        where: {
          //...() this means that we are using ternary operator in where clause
          ...(userId ? { userId: userId } : { username: username }),
        },
        //attributes: ["userId", "username"],
        attributes: { exclude: ["password", "roleId"] },
        include: [
          {
            model: models.roles, //joining with table roles
            attributes: ["role", "roleId"],
          },
        ],
        // paranoid: false, //this will show deleted user too
      });
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
};
