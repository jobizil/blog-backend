// TODO: [] - Implement Log Out functionality

const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')

const logoutUser = async (req, res) => {
	try {
		// const user = await User.find()
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { logoutUser }
