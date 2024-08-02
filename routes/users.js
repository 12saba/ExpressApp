// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var routes = require("express").Router();
routes.get("/create", (req, res) => {
  return res.send("crreate user API");
});
//upsert
routes.get("/read", (req, res) => {
  return res.send("crreate user READ API");
});
//delete
routes.get("/delete", (req, res) => {
  return res.send("crreate user DELETE API");
});
//update
routes.get("/update", (req, res) => {
  return res.send("crreate user UPDATE API");
});

module.exports = routes;
