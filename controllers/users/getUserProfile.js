const User = require('../../models/users.model')

// TODO: Use validated user to update user profile

const { handlerResponse } = require('../../utils/error-handler')

const getProfile = async (req, res) => {
	const { userId } = req.user
	try {
		// Validate user id
		if (userId !== req.params.id) {
			return handlerResponse(req, res, 400)
		}

		const user = await User.findById(userId).populate('articles comments')
		if (!user) {
			return handlerResponse(req, res, 404, null, 'User not found.')
		}

		return handlerResponse(req, res, 200, {
			status: 'Success',
			data: user,
		})
	} catch (error) {
		return handlerResponse(req, res, 500)
	}
}
module.exports = { getProfile }
