const Article = require('../../models/articles.model')
const { handlerResponse } = require('../../utils/error-handler')
// NOTE: []- Check for user ID
// NOTE: []- Check for article ID

const removeArticle = async (req, res) => {
  const { id } = req.params

  try {
    article = await Article.findById(id)
    if (!article) {
      return handlerResponse(req, res, 404)
    }
    article.remove()

    return handlerResponse(req, res, 200, {
      status: 'success',
      message: 'Article removed successfully.',
    })
  } catch (error) {
    console.log(error)
    return handlerResponse(req, res, 400)
  }
}
module.exports = { removeArticle }
