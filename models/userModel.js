const { response } = require("express");
const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
  getallUsers: async (query) => {
    try {
      const users = await models.users.findAll({
        where: {
          //checks firstName exists? if yes creates an object and then filer is performed on the firstName column
          ...(query.firstName
            ? { firstName: { [Op.substring]: query.firstName } }
            : true),
          ...(query.lastName
            ? { lastName: { [Op.substring]: query.lastName } }
            : true),
          ...(query.mobile
            ? { mobile: { [Op.substring]: query.mobile } }
            : true),
          ...(query.email ? { email: { [Op.substring]: query.email } } : true),
          ...(query.username
            ? { username: { [Op.substring]: query.username } }
            : true),
        },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["roleId", "role"],
            //role filter here bcz it exist in role table
            where: {
              ...(query.role ? { role: query.role } : true),
            },
          },
        ],
        // order:[["order", "by"]], order accepts two values
        order: [
          [
            query.orderWith ? query.orderWith : "firstName",
            query.orderBy ? query.orderBy : "ASC",
          ],
        ],
        offset: query.offset,
        limit: query.limit,
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
      const query = {
        where: {
          ...(userId ? { userId } : { username }),
        },
        // Include password for authentication
        attributes: ["userId", "username", "password", "email", "roleId"], // Add required fields here
        include: [
          {
            model: models.roles,
            attributes: ["role", "roleId"],
          },
        ],
      };
      const user = await models.users.findOne(query);
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
  updateUser: async ({ userId, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            userId: userId,
          },
        }
      );
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
  getProfile: async ({ username, userId }) => {
    try {
      const query = {
        where: {
          ...(userId ? { userId } : { username }),
        },
        // Include password for authentication
        attributes: ["userId", "username", "password", "email", "roleId"], // Add required fields here
      };
      const user = await models.users.findOne(query);
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
