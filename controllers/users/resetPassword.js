// TODO: []- Reset user password with token sent to email
// NOTE: [+]- Get reset token from parameter
// NOTE: [+]- Comapre/ Find reset token within db records
// NOTE: [+]- Validate token expiry time
// NOTE: [+]- Hash new password
// NOTE: [+]- Update new hashed password

const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const User = require('../../models/users.model')
const { userToken } = require('../../middlewares/authToken')

const { handlerResponse } = require('../../utils/error-handler')

const resetPassword = async (req, res) => {
  const { resetToken } = req.params
  const { password } = req.body

  try {
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    const user = await User.findOne({
      resetToken: resetPasswordToken,
      resetExpire: { $gt: Date.now() },
    })
    if (!user) {
      return handlerResponse(req, res, 400, null, 'Invalid or Expired Token')
    }

    user.password = password
    user.resetToken = undefined
    user.resetExpire = undefined
    await user.save()

    const token = userToken(user, res)
    return handlerResponse(req, res, 200, {
      status: 'Success',
      message: 'Password successfully updated.',
      token: token.token,
    })
  } catch (error) {
    console.log(error)
    return handlerResponse(req, res, 400)
  }
}
module.exports = { resetPassword }
