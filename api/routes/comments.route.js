'use strict'
const { Router } = require('express')
const authentecateUser = require('../../middlewares/authMiddleware')

const { createComment } = require('../../controllers/comments')

const router = Router()

router.use(authentecateUser)
router.route('/comment').post(createComment)

module.exports = router
