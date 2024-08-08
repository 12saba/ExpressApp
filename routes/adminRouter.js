const routes = require("express").Router();
const { create, getAll, dell } = require("../controllers/adminController");
const { createrUser } = require("../Validtion/userValidation");
routes.get("/getAll", getAll);
routes.post("/create", createrUser, create);
routes.delete("/dell", dell);

module.exports = routes;
