const Article = require('../../models/articles.model')
const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')

const { createArticleValidation } = require('../../middlewares/requestValidators/articleValidation')

const createArticle = async (req, res) => {
	const { title, content, author } = req.body
	const { error } = createArticleValidation(req.body)
	if (error) {
		return handlerResponse(req, res, 400, null, error.details[0].message)
	}

	try {
		if (author != req.user._id) {
			return handlerResponse(req, res, 400, null, 'Invalid Author ID.')
		}
		if (!title) {
			return handlerResponse(req, res, 400, null, 'Title cannot be empty.')
		}
		if (!content) {
			return handlerResponse(req, res, 400, null, 'You cannot publish an empty content.')
		}
		const article = await Article.create({ ...req.body })

		return handlerResponse(req, res, 201, {
			status: 'Success',
			data: article,
		})
	} catch (error) {
		res.send(error)
		return handlerResponse(req, res, 400)
	}
}
module.exports = { createArticle }
