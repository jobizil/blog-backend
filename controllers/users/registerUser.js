const bcrypt = require('bcryptjs');
const User = require('../../models/users.model');

const { handlerResponse } = require('../../utils/error-handler');
const { registerUserValidation } = require('../../middlewares/userValidation');

const { checkIfUserExists } = require('../../middlewares/checkUser');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate Registration Data
  const { error } = registerUserValidation(req.body);
  if (error) return handlerResponse(req, res, 400, null, error.details[0].message);

  if (!username || !email || !password) return handlerResponse(req, res, 400);

  //  Check if Email Alerady Exists
  const { checkUsername, checkEmail } = await checkIfUserExists(
    username,
    email,
  );

  if (checkUsername) return handlerResponse(req, res, 400, null, 'Username already exists');
  if (checkEmail) return handlerResponse(req, res, 400, null, 'Email already exists');

  try {
    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, genSalt);

    const createUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    return handlerResponse(req, res, 201, {
      status: 'Success',
      data: createUser,
    });
  } catch (error) {
    return handlerResponse(req, res, 400);
  }
};
module.exports = { registerUser };
