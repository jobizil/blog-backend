const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
// const cookieParser = require('cookie-parser')
const { origin } = require('./config')
const connectToDatabase = require('./config/database')()

const api = require('./api')
const logger = require('./utils/logger')

const app = express()

app.use(morgan('combined', { stream: logger.stream }))
app.use(helmet())
app.use(
	cors({
		origin: origin, //url of production app
		credentials: false, // make true on production
	}),
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// BASIC ROUTING

// app.get('/api/v1', function (_, res) {
// 	res.json({ message: 'Welcome to our API' })
// })
app.use('/api/v1', api)

module.exports = app
