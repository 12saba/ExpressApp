const Joi = require("joi");

module.exports = {
  createrUser: async (req, res, next) => {
    const createuser = Joi.object({
      username: Joi.string().min(3).max(23).required(),
      passward: Joi.string().min(8).max(34).required(),
    });
    try {
      await createuser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
