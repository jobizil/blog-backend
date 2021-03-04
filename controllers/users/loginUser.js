const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')

const loginUser = async (req, res) => {
	const { email, password } = req.body

	try {
		if (!email || !password) {
			return handlerResponse(req, res, 400, null, 'Invalid Credentials')
		}

		const user = await User.findOne({
			email,
		})
		return handlerResponse(req, res, 200, { status: 'Success', data: user })
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { loginUser }
