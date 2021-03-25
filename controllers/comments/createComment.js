const Comment = require('../../models/comments.model')

const Article = require('../../models/articles.model')

const User = require('../../models/users.model')

const { handlerResponse } = require('../../utils/error-handler')

const createComment = async (req, res) => {
	const { _id } = req.user
	const { articleId, authorId, comment } = req.body
	try {
		const article = await Article.findOne({ _id: articleId })
		if (!article) {
			return handlerResponse(req, res, 400, null, 'Article not found')
		}
		const author = await User.findOne({ _id: authorId }).select('username email profilePhoto')

		if (!author) {
			return handlerResponse(req, res, 400, null, 'Invalid Author ID')
		}

		const comment = await Comment.create({ ...req.body })
		return handlerResponse(req, res, 200, {
			status: 'Success',
			comment,
		})
	} catch (error) {
		return handlerResponse(req, res, 400)
	}
}
module.exports = { createComment }
