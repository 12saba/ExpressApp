const Joi = require("joi");

module.exports = {
  createrUser: async (req, res, next) => {
    const createuser = Joi.object({
      role: Joi.valid("Instructor", "Admin", "Trainee").required(),
      username: Joi.string().min(3).max(23).required(),
      password: Joi.string().min(8).max(34).required(),
      firstName: Joi.string().min(3).max(34).required(),
      lastName: Joi.string().min(3).max(34).required(),
      email: Joi.string().email().required(),
      mobile: Joi.string().required().length(13),
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
    const userUpdate = Joi.object({
      username: Joi.string().min(3).max(23).required(),
      userId: Joi.string().required(),
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string(),
      mobile: Joi.string(),
    });
    try {
      await userUpdate.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllUserSchema: async (req, res, next) => {
    const getAllUser = Joi.object({
      //pagination
      pageNo: Joi.number().required(),
      limit: Joi.number().valid(2, 4).required(), //valid tells no of records to be displayed 2/4
      //sorting
      orderWith: Joi.string().valid(
        "firstName",
        "lastName",
        "username",
        "email",
        "mobile"
      ),
      orderBy: Joi.string().valid("ASC", "DESC"),
      //filter
      username: Joi.string(),
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string(),
      mobile: Joi.string(),
      role: Joi.valid("Instructor", "Admin", "Trainee"),
    });

    try {
      const validate = await getAllUser.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getLoginSchema: async (req, res, next) => {
    const getLogin = Joi.object({
      username: Joi.string().min(3).max(23).required(),
      password: Joi.string().min(8).max(34).required(),
    });
    try {
      await getLogin.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
