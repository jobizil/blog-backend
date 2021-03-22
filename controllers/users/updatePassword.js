'use strict'

const User = require('../../models/users.model')

// TODO: Use validated user to update user profile

// FIXME: []- Logic to update password
const bcrypt = require('bcryptjs')
const { handlerResponse } = require('../../utils/error-handler')

const updatePassword = async (req, res) => {
	let { password } = req.body
	try {
		const user = await User.findById(req.params.id).select('+password')
		if (!user) {
			return handlerResponse(req, res, 404, null, 'User not found.')
		}
		//    Validate Data Change
		// if (password == user.password) {
		// 	return handlerResponse(req, res, 200, { message: 'Password not modified.' })
		// }

		password = user.password

		await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
			new: true,
			runValidators: true,
		})

		return handlerResponse(req, res, 200, {
			status: 'Success',
			message: 'Your password has been updated successfully',
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 500)
	}
}
module.exports = { updatePassword }
