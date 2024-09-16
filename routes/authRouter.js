const { login } = require("../controllers/authController");
const { getLoginSchema } = require("../Validtion/userValidation");
var routes = require("express").Router();
routes.post("/login", getLoginSchema, login);

//routes.delete("/logout", LogOut);
module.exports = routes;
