'use strict'
const { Router } = require('express')
const authentecateUser = require('../../middlewares/authMiddleware')

const { createComment, getComments, modifyComment, removeComment } = require('../../controllers/comments')

const router = Router()

router.use(authentecateUser)
router.route('/comment').post(createComment).get(getComments)

router.route('/comment/:id').put(modifyComment).delete(removeComment)

module.exports = router
