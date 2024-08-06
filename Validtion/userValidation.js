const Joi = require("joi");

module.exports = {
  createrUser: (req, res, next) => {
    const createuser = joi.object({
      username: joi.string().min(3).max(23).required(),
      passward: joi.string().min(2).max(34).required(),
    });
    try {
      const validator = createuser.validatorAsync(req.body);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
