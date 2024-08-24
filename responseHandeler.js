const responseHandler = (data, res, next) => {
  try {
    if (data.error) {
      return res.send({
        error: data.error,
      });
    }
    return res.send({
      response: data.response,
    });
  } catch (error) {
    console.error(error);
    return res.send({
      error: error,
    });
  }
  next();
};

module.exports = responseHandler;
