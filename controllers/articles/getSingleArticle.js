const Article = require('../../models/articles.model')

// TODO: Use validated user to update user profile

const { handlerResponse } = require('../../utils/error-handler')

const getSingleArticle = async (req, res) => {
	const { userId } = req.user

	try {
		// if (!userId) {
		// 	return handlerResponse(req, res, 401)
		// }
		// console.log(req.user)

		const article = await Article.findById(req.params.id).populate('comments')
		if (!article) {
			return handlerResponse(req, res, 404, null, 'article not found.')
		}

		return handlerResponse(req, res, 200, {
			status: 'Success',
			data: article,
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 500, null, { message: error })
	}
}
module.exports = { getSingleArticle }
