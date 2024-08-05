module.exports = {
  Login: (req, res) => {
    try {
      return res.send({
        response: "You are login",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  LogOut: (req, res) => {
    try {
      return res.send({
        response: "Logut Here",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
