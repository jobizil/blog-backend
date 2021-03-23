const Article = require('../../models/articles.model')

const { handlerResponse } = require('../../utils/error-handler')

// TODO: [] - Implement pagination and data filtering
// TODO: [] - Implement query functionality
const getArticles = async (req, res) => {
	try {
		const article = await Article.find().populate('author')
		if (!article) {
			return handlerResponse(req, res, 204)
		}
		return handlerResponse(req, res, 200, {
			status: 'Success',
			'Total Articles': article.length,
			data: article,
		})
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { getArticles }
