const User = require('../../models/users.model')

// TODO: Use validated user to update user profile

const { handlerResponse } = require('../../utils/error-handler')

const { updateUserValidation } = require('../../middlewares/userValidation')

const updateProfile = async (req, res) => {
  let updateUser
  let { username, email } = req.body
  try {
    const { error } = updateUserValidation(req.body)
    if (error) {
      return handlerResponse(req, res, 400, null, error.details[0].message)
    }

    const user = await User.findById(req.params.id)
    if (!user) {
      return handlerResponse(req, res, 404, null, 'User not found.')
    }

    username = username || user.username
    email = email || user.email
    updateUser = await user.save()

    updateUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })

    return handlerResponse(req, res, 200, {
      status: 'Success',
      data: updateUser,
    })
  } catch (error) {
    console.log(error)
    return handlerResponse(req, res, 500)
  }
}
module.exports = { updateProfile }
