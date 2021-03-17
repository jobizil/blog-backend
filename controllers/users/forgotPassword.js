const { randomBytes } = require('crypto')

const User = require('../../models/users.model')

// TODO: Set request for forgot password by sending to user email address.
// NOTE: [+] Find user email
// NOTE: [+] Generate Reset token
// NOTE: [+] Update reset token and token expire into db
// NOTE: [+] Generate reset url
// NOTE: [] Write a send email function

const { handlerResponse } = require('../../utils/error-handler')

const forgotPassword = async (req, res) => {
	const { email } = req.body
	try {
		let user
		user = await User.findOne({ email })

		if (!user) {
			return handlerResponse(req, res, 404, null, 'Reset token has been sent to your email if registered.')
		}

		// Generate reset token
		const resetToken = randomBytes(34).toString('hex')
		const resetExpire = Math.floor(Date.now() / 1000 + 60 * 30 * 24)

		user.updateOne({ resetToken, resetExpire })

		const resetUrl = `http://${req.headers.host}/auth/reset/${user.resetToken}`
		// const resetUrl = `http://${req.headers.host}/auth/reset?token=${user.resetToken}` User token as query params
		return handlerResponse(req, res, 200, {
			status: 'Success',
			data: user,
			message: 'A password reset token has been sent to your registered email address',
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 500)
	}
}
module.exports = { forgotPassword }
