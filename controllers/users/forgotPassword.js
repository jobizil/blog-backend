const User = require('../../models/users.model')
const sendMail = require('../../utils/sendMail')
const {
  mailAuth: { user_mail },
} = require('../../config')

// TODO: Set request for forgot password by sending to user email address.

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
    const resetPasswordToken = user.generateResetToken()
    console.log('Hello', resetPasswordToken)

    await user.save({ validateBeforeSave: false })
    const resetUrl = `${req.protocol}://${req.headers.host}/auth/reset/${resetPasswordToken}`
    console.log(resetUrl)
    await sendMail({
      source: user_mail,
      receiver: email,
      subject: 'Password Reset Request',
      content: `  <div> Hi, ${user.username}, <br /><div>
            <div> You are receiving this email because you (or someone else) has requested for a password reset.<br /> Click the link below to reset your password or simply ignore it if you think this is a mistake. </div>
            
            <br /><div>${resetUrl}</div>`,
    })

    return handlerResponse(req, res, 200, {
      status: 'Success',
      message: 'A password reset token has been sent to your registered email address',
    })
  } catch (error) {
    user.resetExpire = undefined
    user.resetToken = undefined
    await user.save({
      validateBeforeSave: false,
    })
    console.log(error)
    return handlerResponse(req, res, 500, 'Reset email could not be sent.')
  }
}
module.exports = { forgotPassword }
// const resetUrl = `http://${req.headers.host}/auth/reset?token=${user.resetToken}` User token as query params
