const Article = require('../../models/articles.model')

const { handlerResponse } = require('../../utils/error-handler')

const modifyArticle = async (req, res) => {
	const { id } = req.params
	let { content, title } = req.body
	try {
		const article = await Article.findById(id)
		if (!article) {
			return handlerResponse(req, res, 204)
		}
		content = content || article.content
		title = title || article.title
		const { author } = article

		const updatedArticle = await Article.findOneAndUpdate({ _id: id }, req.body, {
			new: true,
			runValidators: true,
		})

		return handlerResponse(req, res, 200, {
			status: 'Success',
			message: 'Articles modified',
			data: updatedArticle,
		})
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { modifyArticle }
