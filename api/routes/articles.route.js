'use strict'

const { Router } = require('express')
const {
	createArticle,
	getArticles,
	getSingleArticle,
	deleteArticle,
	editArticle,
} = require('../../controllers/articles')
const authentecateUser = require('../../middlewares/authMiddleware')

const router = Router({ mergeParams: true })

router.route('/new-article').post(createArticle)
router.use(authentecateUser)
router.route('/articles').get(getArticles)
router.route('/article/:id').get(getSingleArticle).delete(deleteArticle).put(editArticle)

module.exports = router
