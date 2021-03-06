const Comment = require('../../models/comments.model')
const { handlerResponse } = require('../../utils/error-handler')
// NOTE: []- Check for user ID
// NOTE: []- Check for article ID

const removeComment = async (req, res) => {
  const { id } = req.params

  try {
    query = await Comment.findByIdAndDelete(id)

    return handlerResponse(req, res, 200, {
      status: 'success',
      message: 'Comment removed successfully.',
    })
  } catch (error) {
    console.log(error)
    return handlerResponse(req, res, 400)
  }
}
module.exports = { removeComment }
