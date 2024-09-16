const routes = require("express").Router();
const { middleware } = require("../midleware");
const {
  create,
  getAll,
  dell,
  get_User,
  update,
} = require("../controllers/studentController");
const {
  createrUser,
  getUsername,
  updateUsername,
  getAllUserSchema,
} = require("../Validtion/userValidation");
routes.get("/getAll", getAllUserSchema, getAll);
routes.post("/create", createrUser, create);
routes.delete("/dell", dell);
routes.get("/getbyUsernme", middleware, getUsername, get_User);
routes.patch("/update", updateUsername, update);
module.exports = routes;
