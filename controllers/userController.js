module.exports = {
  create: (req, res) => {
    try {
      return res.send({
        response: "create user api",
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
        response: "All user here",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
