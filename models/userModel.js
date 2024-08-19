const userModel = require("./index");
const { v4: uuidv4 } = require("uuid");
module.exports = {
  getAll: async () => {
    const users = await userModel.models.users.findAll();
    return users;
  },
  createUser: async (body) => {
    console.log(body);
    const user = await userModel.models.users.create({
      userId: uuidv4(),
      username: body.username,
      password: body.password,
    });
    return user;
  },
};
