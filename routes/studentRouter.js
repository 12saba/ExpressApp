const routes = require("express").Router();
const {
  create,
  getAll,
  dell,
  getStudent,
} = require("../controllers/studentController");
const { createrUser, getUsername } = require("../Validtion/userValidation");
routes.get("/getAll", getAll);
routes.post("/create", createrUser, create);
routes.delete("/dell", dell);
routes.get("/getbyUsernme", getUsername, getStudent);
module.exports = routes;
