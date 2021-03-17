// TODO: []- Reset user password with token sent to email
// NOTE: [+]- Get reset token from parameter
// NOTE: [+]- Comapre/ Find reset token within db records
// NOTE: []- Validate token expiry time
// NOTE: []- Hash new password
// NOTE: []- Update new hashed password

const bcrypt = require('bcryptjs')
const User = require('../../models/users.model')
const { handlerResponse } = require('../../utils/error-handler')

const resetPassword = async (req, res) => {
	const { resetToken } = req.params
	const { password } = req.body

	try {
		const user = await User.findOne({ resetToken })
		if (!user) {
			return handlerResponse(req, res, 400, null, 'Invalid or Expired Token')
		}
		const currentTime = Math.floor(Date.now() / 1000)
		if (user.resetExpire > currentTime) {
			const hashPassword = await bcrypt.hash(password, 10)

			await user.updateOne({
				password: hashPassword,
			})

			return handlerResponse(req, res, 200, {
				status: 'Success',
				message: 'Password successfully updated.',
			})
		}
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 400)
	}
}
module.exports = { resetPassword }
