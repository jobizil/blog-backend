const { Router } = require('express')

const router = Router()

/*
 NOTE : Handles all routes within this file and then exporst to the default app.js.
This helps to keep my file neat and consistent.
*/

const userRoute = require('./routes/users.route')
const articleRoute = require('./routes/articles.route')
const commentRoute = require('./routes/comments.route')

router.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my api' })
})

router.use(userRoute)
router.use(articleRoute)
router.use(commentRoute)
module.exports = router
