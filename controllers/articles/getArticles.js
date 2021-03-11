const Article = require('../../models/articles.model')

const { handlerResponse } = require('../../utils/error-handler')

// FIXME Associate Article to Public
const getArticles = async (req, res) => {
	try {
		const article = await Article.find().populate('author')
		if (!article) {
			return handlerResponse(req, res, 204)
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
module.exports = { getArticles }
