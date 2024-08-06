const user = [];
module.exports = {
  create: (req, res) => {
    try {
      user.push(req.body);

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
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
