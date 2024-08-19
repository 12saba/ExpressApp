const routes = require("express").Router();
const {
  create,
  getAll,
  dell,
  getStudent,
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
routes.get("/getbyUsernme", getUsername, getStudent);
routes.put("/updateUser", updateUsername, updateUser);
module.exports = routes;
