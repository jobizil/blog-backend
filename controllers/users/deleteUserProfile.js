const User = require('../../models/users.model')

// TODO: Use validated user to update user profile

const { handlerResponse } = require('../../utils/error-handler')

const deleteProfile = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) {
			return handlerResponse(req, res, 404, null, 'User not found.')
		}
		user.remove()

		return handlerResponse(req, res, 200, {
			status: 'Success',
			message: 'Your profile has beem deleted.',
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 500)
	}
}
module.exports = { deleteProfile }
