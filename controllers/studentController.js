const { response } = require("../app");

const student = [];
module.exports = {
  create: (req, res) => {
    try {
      student.push(req.body);
      // const { username, password } = req.body;
      // student.map((student) => {
      //   if (username == username) {
      //     response:"student already exist"
      //   }
      // })
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
        response: student,
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
        response: "student logout here",
      });
    } catch (error) {
      return response.send({
        error: error,
      });
    }
  },
};
