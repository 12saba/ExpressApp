const teacher = [];
module.exports = {
  create: (req, res) => {
    try {
      teacher.push(req.body);
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
        response: teacher,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  LogOut: (req, res) => {
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
