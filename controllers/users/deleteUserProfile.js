const User = require('../../models/users.model')

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
			message: 'Your profile has been deleted.',
		})
	} catch (error) {
		return handlerResponse(req, res, 500)
	}
}
module.exports = { deleteProfile }
