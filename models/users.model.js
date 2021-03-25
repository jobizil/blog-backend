const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const crypto = require('crypto')

const jwt = require('jsonwebtoken')

const moment = require('moment')

const { auth } = require('../config')

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
		resetToken: String,
		resetExpire: Number,
		token: String,
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	},
)
// Virtual populate articles
UserSchema.virtual('articles', {
	ref: 'Article',
	localField: '_id',
	foreignField: 'author',
	justOne: false,
})
UserSchema.virtual('comments', {
	ref: 'Comment',
	localField: '_id',
	foreignField: 'authorId',
	justOne: false,
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
// Remove sensitive data before sending to client
UserSchema.methods.toJSON = function () {
	const obj = this.toObject()
	delete obj.password
	delete obj.createdAt
	delete obj.updatedAt
	delete obj.profilePhotoId
	delete obj.token
	delete obj.id
	delete obj.__v

	return obj
}

// Generate User Token

UserSchema.methods.generateUserToken = async function () {
	const payload = { _id: this._id.toString(), username: this.username }

	// generate access token and expiry date
	const token = jwt.sign(payload, auth.jwt_secret, {
		expiresIn: auth.access_token_life,
	})

	// Expiry time of access token
	expireAt = moment().add(auth.access_token_life).valueOf()

	this.token = token
	await this.save()
	return { token, expireAt }
}

// Cascade Delete realted user articles and comments
UserSchema.pre('remove', async function (next) {
	await this.model('Article').deleteMany({ author: this._id })
	await this.model('Comment').deleteMany({ authorId: this._id })
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
