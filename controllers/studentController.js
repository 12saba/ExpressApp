const { response } = require("../app");
const { hash, compare } = require("bcrypt");
const { getAll, createUser } = require("../models/userModel");

// const student = [
//   // {
//   //   username: "noOne",
//   //   passward: "1234567",
//   // },
// ];

module.exports = {
  create: async (req, res) => {
    try {
      // //student.push(req.body);
      // let { username, password } = req.body;
      // let isExist = false;
      // student.map((user) => {
      //   if (user.username == username) {
      //     //return res.send("Student already Exist");
      //     isExist = true;
      //   }
      // });
      // if (!isExist) {
      //   password = await hash(password, 10);
      //   student.push({ username, password });
      //   return res.send({
      //     response: {
      //       username,
      //       password,
      //     },
      //   });
      // } else {
      //   return res.send("Student already Exist");
      // }
      const user = createUser(req.body);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
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
        response: getAll,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  dell: (req, res) => {
    try {
      const { username, password } = req.query;
      const index = student.findIndex((user) => user.username === username);

      if (index !== -1) {
        // const user = ;
        if (student[index].password === password)
          // Remove the user from the array
          student.splice(index, 1);
        return res.send({
          response: `User deleted with username: ${req.query.username}`,
        });
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
  getStudent: async (req, res) => {
    try {
      const { username, password } = req.query;
      for (let i = 0; i < student.length; i++) {
        if (student[i].username === username) {
          const isValidatePassword = await compare(
            password,
            student[i].password
          );
          if (isValidatePassword) {
            // console.log("error here ", error);
            return res.send({
              "user exist": student[i],
            });
          }
        }
      }
      return res.send("student does not exist");
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  updateUser: (req, res) => {
    try {
      const { username, password, newDetails } = req.body;

      // Find the index of the user by username
      const index = student.findIndex((user) => user.username === username);

      if (index !== -1) {
        // Retrieve the user object
        // const user = ;

        // Check if the provided password matches the user's password
        if (student[index].password === password) {
          // Update user details with new information
          student[index] = { ...user, ...newDetails };

          return res.send({
            message: "User updated successfully",
            updatedUser: student[index], // Return the updated user data
          });
        } else {
          return res.send({
            response: "Incorrect password",
          });
        }
      } else {
        return res.send({
          response: "User does not exist",
        });
      }
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
