const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')
const { loginUserValidation } = require('../../middlewares/userValidation')

const loginUser = async (req, res) => {
  const { email, password } = req.body

  const { error } = loginUserValidation(req.body)
  if (error) {
    return handlerResponse(req, res, 400, null, error.details[0].message)
  }

  if (!email || !password) {
    return handlerResponse(req, res, 400, null, 'Invalid Credentials')
  }

  try {
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return handlerResponse(req, res, 400, null, 'Invalid Credentials')
    }

    const comparePassword = await user.validatePassword(password)
    if (!comparePassword) {
      return handlerResponse(req, res, 400, null, 'Invalid Credentials')
    }

    return handlerResponse(req, res, 200, { status: 'Success', data: user })
  } catch (error) {
    console.log(error)
    return handlerResponse(req, res, 400)
  }
}
module.exports = { loginUser }
