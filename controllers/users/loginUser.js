const bcrypt = require('bcryptjs');
const User = require('../../models/users.model');

const { handlerResponse } = require('../../utils/error-handler');
const { loginUserValidation } = require('../../middlewares/userValidation');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const { error } = loginUserValidation(req.body);
  if (error) return handlerResponse(req, res, 400, null, error.details[0].message);

  try {
    if (!email || !password) return handlerResponse(req, res, 400, null, 'Invalid Credentials');

    const user = await User.findOne({ email });

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) return handlerResponse(req, res, 400, null, 'Invalid Credentials');
    password.delete();

    return handlerResponse(req, res, 200, { status: 'Success', data: user });
  } catch (error) {
    return handlerResponse(req, res, 400);
  }
};
module.exports = { loginUser };
