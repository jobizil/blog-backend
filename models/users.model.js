'use strict'

const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const crypto = require('crypto')

const { Schema } = mongoose

const UserSchema = new Schema(
	{
		username: {
			type: 'String',
			required: true,
		},
		email: {
			type: 'String',
			required: true,
			unique: true,
		},
		password: {
			type: 'String',
			required: true,
			select: false,
		},

		profilePhoto: {
			type: 'String',
			default: 'https://res.cloudinary.com/zeemag/image/upload/v1601946625/konnet/no-avatar_a5icj4.png',
		},
		profilePhotoId: {
			type: 'String',
			default: 'kvfhdvk',
		},
		ip_address: 'String',
		last_login: { type: Date, default: Date.now() },
		token: String,
		resetToken: String,
		resetExpire: Number,
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	},
)

UserSchema.virtual('articles', {
	ref: 'Article',
	localField: '_id',
	foreignField: 'author',
})

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	const genSalt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, genSalt)
	next()
})

// Compare Saved password
UserSchema.methods.validatePassword = async function (password) {
	return await bcrypt.compare(password, this.password)
}

// Generate Password Reset token
UserSchema.methods.generateResetToken = function () {
	// Generate Reset Token
	const resetPasswordToken = crypto.randomBytes(20).toString('hex')
	this.resetToken = crypto.createHash('sha256').update(resetPasswordToken).digest('hex')
	// Set expiry time
	this.resetExpire = Date.now() + 10 * 60 * 1000 //Expires in 10 mins
	return resetPasswordToken
}

module.exports = mongoose.model('User', UserSchema)
