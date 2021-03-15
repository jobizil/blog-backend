const Article = require('../../models/articles.model')

// TODO: Use artocle owner to delete article

const { handlerResponse } = require('../../utils/error-handler')

// TODO: IF user is not autorized, throw authorization error and if user is authorized and not the owner of the article, throw ownership/restriction error.
const deleteArticle = async (req, res) => {
	try {
		const { userId } = req.user
		let article
		article = await Article.findById(req.params.id)
		if (!article) {
			return handlerResponse(req, res, 404, null, 'Article not found.')
		}

		if (userId != article.author._id) {
			return handlerResponse(req, res, 403)
		}
		await article.delete()
		return handlerResponse(req, res, 200, {
			status: 'Success',
			message: 'Your published article has been deleted.',
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 500)
	}
}
module.exports = { deleteArticle }
