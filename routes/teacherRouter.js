const routes = require("express").Router();
const { create, getAll, LogOut } = require("../controllers/teachController");
const { createrUser } = require("../Validtion/userValidation");
routes.get("/getAll", getAll);
routes.post("/create", createrUser, create);
routes.delete("/dell", LogOut);

module.exports = routes;
