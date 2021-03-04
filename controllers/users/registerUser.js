const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')

const registerUser = async (req, res) => {
	const { username, email, password } = req.body

	try {
		if (!username || !email || !password) {
			return handlerResponse(req, res, 400)
		}
		const createUser = await User.create({
			username,
			email,
			password,
		})
		return handlerResponse(req, res, 201, { status: 'Success', data: createUser })
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { registerUser }
