const Comment = require('../../models/comments.model')
const { handlerResponse } = require('../../utils/error-handler')
// NOTE: []- Check for user ID
// NOTE: []- Check for article ID

const modifyComment = async (req, res) => {
  const { id } = req.params
  let { comment } = req.body
  let query
  try {
    query = await Comment.findById(id)
    comment = query.comment || comment

    const updateComment = await Comment.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })

    return handlerResponse(req, res, 200, {
      status: 'success',
      data: updateComment,
    })
  } catch (error) {
    console.log(error)
    return handlerResponse(req, res, 400)
  }
}
module.exports = { modifyComment }
