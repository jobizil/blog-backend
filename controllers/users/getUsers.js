const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')

const getUsers = async (req, res) => {
	try {
		const user = await User.find().populate({
			path: 'articles',
			select: 'title ',
		})

		if (!user) {
			return handlerResponse(req, res, 204)
		}
		return handlerResponse(req, res, 200, {
			status: 'Success',
			'Total Users': user.length,
			data: user,
		})
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { getUsers }
