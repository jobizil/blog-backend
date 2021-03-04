const User = require('../../models/users.model')

// TODO: Use validated user to update user profile

const { handlerResponse } = require('../../utils/error-handler')

// return handlerResponse(req, res, 200, { status: 'Success', data: user })

const updateProfile = async (req, res) => {
	try {
		const { username, email } = req.body

		const user = await User.findByIdAndUpdate(req.params.id, { username, email }, { new: true, runValidators: true })
		if (!user) {
			return handlerResponse(req, res, 404, null, 'User not found.')
		}

		return handlerResponse(req, res, 200, { status: 'Success', data: user })
		console.log(res.originalUrl)
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 500)
	}
}
module.exports = { updateProfile }
