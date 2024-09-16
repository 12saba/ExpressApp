const { getUser } = require("../models/userModel");
const responseHandler = require("../responseHandeler");
const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  login: async (req, res) => {
    try {
      // Ensure request body has password
      if (!req.body || !req.body.password) {
        return responseHandler({ response: "Password is required" }, res);
      }

      // Check if user exists
      const isUser = await getUser(req.body);
      if (isUser.error || !isUser.response) {
        isUser.error
          ? (isUser.error = "Invalid User")
          : (isUser.response = "Invalid User");
        res.cookie("auth", "undefined");
        console.log("User response:", isUser.response);
        console.log(
          "Data values:",
          isUser.response ? isUser.response.dataValues : "No user data"
        );
        return responseHandler(isUser, res);
      }

      // Get password from isUser and compare
      const { password } = isUser.response.dataValues;
      if (!password) {
        return responseHandler(
          { response: "User data is missing password" },
          res
        );
      }

      console.log("Password from request:", req.body.password);
      console.log("Password from database:", password);

      const isValid = await compare(req.body.password, password);
      if (!isValid) {
        res.cookie("auth", "undefined"); // Generating cookie
        return responseHandler({ response: "Invalid Credentials" }, res);
      }

      // Now add token if user exists
      const user = isUser.response.dataValues;
      delete user.password;
      const token = sign(user, process.env.SECRET, { expiresIn: "6h" });
      res.cookie("auth", token); // Generating cookie
      return responseHandler({ response: token }, res);
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  },
};
