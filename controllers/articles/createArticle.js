const Article = require('../../models/articles.model')

const { handlerResponse } = require('../../utils/error-handler')

const createArticle = async (req, res) => {
	const { title, content, author } = req.body

	try {
		const article = await Article.create({
			title,
			content,
			author,
		})

		return handlerResponse(req, res, 201, {
			status: 'Success',
			data: article,
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 400)
	}
}
module.exports = { createArticle }