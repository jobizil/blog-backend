'use strict'

const { createArticle } = require('./createArticle')
const { getArticles } = require('./getArticles')
const { getSingleArticle } = require('./getSingleArticle')
const { deleteArticle } = require('./deleteArticle')
const { editArticle } = require('./updateArticle')

module.exports = { createArticle, getArticles, getSingleArticle, deleteArticle, editArticle }
