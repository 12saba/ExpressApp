const { Login, LogOut } = require("../controllers/authController");
const { createrUser } = require("../Validtion/userValidation");
var routes = require("express").Router();
routes.post("/login", createrUser, Login);
routes.delete("/logout", LogOut);

module.exports = routes;
