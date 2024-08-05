const { Login, LogOut } = require("../controllers/authController");

var routes = require("express").Router();
routes.post("/login", Login);
routes.delete("/logout", LogOut);

module.exports = routes;
