const Article = require('../../models/articles.model')
const User = require('../../models/users.model')
const { handlerResponse } = require('../../utils/error-handler')

// FIXME Associate Article to Public

/*
 * * route:  GET   /articles
 * * route:  GET   /user/:id/articles
 */

const getArticles = async (req, res) => {
	try {
		const articles = await Article.find().populate({ path: 'author', select: 'username email last_login ' })

		return handlerResponse(req, res, 200, {
			status: 'Success',
			'Total Articles': articles.length,
			data: articles,
		})
	} catch (error) {
		console.log(error)
		return handlerResponse(req, res, 400)
	}
}

module.exports = { getArticles }
