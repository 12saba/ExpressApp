const { response } = require("../app");

const student = [
  // {
  //   username: "noOne",
  //   passward: "1234567",
  // },
];

module.exports = {
  create: (req, res) => {
    try {
      //student.push(req.body);
      const { username, passward } = req.body;
      let isExist = false;
      student.map((user) => {
        if (user.username == username) {
          //return res.send("Student already Exist");
          isExist = true;
        }
      });
      if (!isExist) {
        student.push({ username, passward });
        return res.send({
          response: {
            username,
            passward,
          },
        });
      } else {
        return res.send("Student already Exist");
      }
    } catch (error) {
      console.log(error);
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
      const { username } = req.query;
      const index = student.findIndex((user) => user.username === username);
      if (index !== -1) {
        // Remove the user from the array
        student.splice(index, 1);
        return res.send({ message: "User removed successfully" });
      } else {
        return res.send({
          response: "student does not exist",
        });
      }
    } catch (error) {
      return response.send({
        error: error,
      });
    }
  },
  getStudent: (req, res) => {
    try {
      const { username } = req.query;
      student.map((user) => {
        if (user.username === username) {
          return res.send({
            response: user,
          });
        }
      });
      return res.send("student does not exist");
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
