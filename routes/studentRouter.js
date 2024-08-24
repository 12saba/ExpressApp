const routes = require("express").Router();
const {
  create,
  getAll,
  dell,
  get_User,
  updateUser,
} = require("../controllers/studentController");
const {
  createrUser,
  getUsername,
  updateUsername,
} = require("../Validtion/userValidation");
routes.get("/getAll", getAll);
routes.post("/create", createrUser, create);
routes.delete("/dell", dell);
routes.get("/getbyUsernme", getUsername, get_User);
routes.put("/updateUser", updateUsername, updateUser);
module.exports = routes;
