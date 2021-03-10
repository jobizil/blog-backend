'use strict'

const { Router } = require('express')
const { createArticle, getArticles } = require('../../controllers/articles')

const router = Router()

router.route('/new-article').post(createArticle)
router.route('/articles').get(getArticles)

module.exports = router
