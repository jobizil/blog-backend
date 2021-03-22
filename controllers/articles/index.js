'use strict'

const { createArticle } = require('./createArticle')
const { getArticles } = require('./getArticles')
const { getSingleArticle } = require('./getSingleArticle')
const { modifyArticle } = require('./modifyArticle')
const { removeArticle } = require('./deleteArticle')

module.exports = { createArticle, getArticles, getSingleArticle, modifyArticle, removeArticle }
