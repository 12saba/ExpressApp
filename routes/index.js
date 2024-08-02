var routes = require("express").Router();
routes.get("/getHome", (req, res) => {
  return res.send("welcom to home page");
});

module.exports = routes;
// //Rest API
// piublic private/ on browser available
//private///who im going to create that gona private
// bussines/// benifets to owner for business//shopyfy//we can change and get change in response
// partner///need to subscription// and we have to pay for it

////API Methods
//CRUD Operation
//post//crete new record
///get//for data retrive
//put/patch//update//to create new record/UOsert// major chaging
//patch//in case we update few chages infeild
//delete/outer ///to dalete data/record

///security
///secret key//end with any frontend request
//authetication//authentic person can send request
//local host is ip adress
