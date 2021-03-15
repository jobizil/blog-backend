const Article = require('../../models/articles.model')
const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')

const { createArticleValidation } = require('../../middlewares/articleValidation')
const editArticle = async (req, res) => {
	let editArticle
	let { title, content } = req.body
	// const { error } = createArticleValidation(req.body)
	// if (error) {
	// 	return handlerResponse(req, res, 400, null, error.details[0].message)
	// }

	try {
		const article = await Article.findById(req.params.id)
		if (!article) {
			return handlerResponse(req, res, 404, null, 'Article not found.')
		}

		title = title || article.title
		content = content || article.content
		editArticle = await article.save()
		editArticle = await Article.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })

		return handlerResponse(req, res, 200, {
			status: 'Success',
			data: editArticle,
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 500)
	}
}
module.exports = { editArticle }
