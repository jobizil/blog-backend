const Comment = require('../../models/comments.model')
const { handlerResponse } = require('../../utils/error-handler')

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return handlerResponse(req, res, 200, {
      status: 'success',
      'Total Comments': comments.length,
      data: comments,
    })
  } catch (error) {
    return handlerResponse(req, res, 400)
  }
}
module.exports = { getComments }
