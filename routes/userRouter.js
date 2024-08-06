var routes = require("express").Router();
const { create, getAll } = require("../controllers/userController");
const { createrUser } = require("../Validtion/userValidation");
routes.get("/getAll", getAll);
routes.post("/create", createrUser, create);

module.exports = routes;
