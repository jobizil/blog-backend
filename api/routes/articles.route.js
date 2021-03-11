'use strict'

const { Router } = require('express')
const { createArticle, getArticles, getSingleArticle } = require('../../controllers/articles')

const router = Router()

router.route('/new-article').post(createArticle)
router.route('/articles').get(getArticles)
router.route('/article/:id').get(getSingleArticle)

module.exports = router
