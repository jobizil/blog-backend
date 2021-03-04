const bcrypt = require("bcryptjs");
const User = require("../../models/users.model");

const { handlerResponse } = require("../../utils/error-handler");
const { registerUserValidation } = require("../../middlewares/userValidation");

const registerUser = async (req, res) => {
	const { username, email, password } = req.body;

	// Validate Registration Data
	const { error } = registerUserValidation(req.body);
	if (error) {
		console.log(error.details);

		return handlerResponse(req, res, 400, null, error.details[0].message);
	}

	const genSalt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, genSalt);
	try {
		if (!username || !email || !password) {
			return handlerResponse(req, res, 400);
		}
		// TODO Check if Email Alerady Exists
		const createUser = await User.create({
			username,
			email,
			password: hashPassword,
		});

		return handlerResponse(req, res, 201, {
			status: "Success",
			data: createUser,
		});
	} catch (error) {
		return handlerResponse(req, res, 400);
	}
};
module.exports = { registerUser };
