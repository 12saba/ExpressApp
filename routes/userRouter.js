var routes = require("express").Router();
const { create, getAll } = require("../controllers/userController");
routes.get("/getAll", getAll);
routes.post("/create", create);

module.exports = routes;
