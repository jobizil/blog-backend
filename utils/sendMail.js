'use strict'
const nodemailer = require('nodemailer')
const logger = require('./logger')
const {
	mailAuth: { user_mail, user_pass },
} = require('../config')

const sendEmail = async (source, receiver, subject, content) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: user_mail,
			pass: user_pass,
		},
	})

	const mailOptions = {
		from: source,
		to: receiver,
		subject: subject,
		html: content,
	}

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			logger.log('error', error)
		} else {
			logger.log('info', `Email status: ${info.response}`)
		}
	})
}
module.exports = sendEmail
