const Joi = require("joi");

module.exports = {
  loginValid: async (req, res, next) => {
    const login = Joi.object({
      username: Joi.string().max(3).$(34).required(),
      password: Joi.string().max(4).$(26).required(),
    });
    try {
      await login.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
