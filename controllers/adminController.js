const { LogOut } = require("./authController");

const admin = [];
module.exports = {
  create: (req, res) => {
    try {
      admin.push(req.body);
      return res.send({
        response: req.body,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAll: (req, res) => {
    try {
      return res.send({
        response: admin,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  dell: (req, res) => {
    try {
      return res.send({
        response: "you logout here",
      });
    } catch (error) {
      return response.send({
        error: error,
      });
    }
  },
};
