const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')
const { registerUserValidation } = require('../../middlewares/userValidation')
const { userToken } = require('../../middlewares/authToken')

const { checkIfUserExists } = require('../../middlewares/checkUser')

const registerUser = async (req, res) => {
	const { username, email, password } = req.body

	// Validate Registration Data
	const { error } = registerUserValidation(req.body)
	if (error) {
		return handlerResponse(req, res, 400, null, error.details[0].message)
	}

	if (!username || !email || !password) {
		return handlerResponse(req, res, 400)
	}

	//  Check if Email Alerady Exists
	const { checkUsername, checkEmail } = await checkIfUserExists(username, email)

	if (checkUsername) {
		return handlerResponse(req, res, 400, null, 'Username already exists')
	}
	if (checkEmail) {
		return handlerResponse(req, res, 400, null, 'Email already exists')
	}

	try {
		const createUser = await User.create({
			username,
			email,
			password,
		})

		const token = userToken(createUser, res)
		return handlerResponse(req, res, 201, {
			status: 'Success',
			message: 'Account created successfully. Wait for page to redirect your login',
			token: token.token,
		})
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { registerUser }
