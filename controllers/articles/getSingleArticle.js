const Article = require('../../models/articles.model')

// TODO: Use validated user to update user profile

const { handlerResponse } = require('../../utils/error-handler')

/*
 * *  @route GET /article/:articleId
 */
const getSingleArticle = async (req, res) => {
	const { userId } = req.user

	// FIXME Associate Single Article to User
	try {
		if (!userId) {
			return handlerResponse(req, res, 401)
		}
		console.log(req.user)

		const article = await Article.findById(req.params.id).populate({
			path: 'author',
			select: 'username, email profilePhoto',
		})
		if (!article) {
			return handlerResponse(req, res, 404, null, 'article not found.')
		}

		return handlerResponse(req, res, 200, {
			status: 'Success',
			data: article,
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 400)
	}
}
module.exports = { getSingleArticle }
