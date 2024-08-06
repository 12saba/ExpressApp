const user = [];
module.exports = {
  create: (req, res) => {
    try {
      const newuser = { ...req.body };
      user.push(newuser);

      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
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
        error: error,
      });
    }
  },
};
