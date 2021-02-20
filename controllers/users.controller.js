const { handlerResponse } = require("../utils/error-handler");

const getUser = async (req, res) => {
  return handlerResponse(req, res, 200, {
    data: "These are all users on board!!!",
  });
};
module.exports = { getUser };
