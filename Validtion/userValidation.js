const Joi = require("joi");

module.exports = {
  createrUser: async (req, res, next) => {
    const createuser = Joi.object({
      username: Joi.string().min(3).max(23).required(),
      password: Joi.string().min(8).max(34).required(),
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
  getUsername: async (req, res, next) => {
    const username = Joi.object({
      username: Joi.string().min(3).max(23).required(),
      password: Joi.string().min(8).max(34).required(),
    });
    try {
      await username.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  updateUsername: async (req, res, next) => {
    const username = Joi.object({
      username: Joi.string().min(3).max(23).required(),
      password: Joi.string().min(8).max(34).required(),
    });
    try {
      await username.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
