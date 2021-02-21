const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
	// firstname: {
	// 	type: 'String',
	// 	required: true,
	// },
	// lastname: {
	// 	type: 'String',
	// 	required: true,
	// },
	username: {
		type: 'String',
		required: true,
	},
	email: {
		type: 'String',
		required: true,
		unique: true,
	},
	profilePhoto: {
		type: 'String',
		default: 'https://res.cloudinary.com/zeemag/image/upload/v1601946625/konnet/no-avatar_a5icj4.png',
	},
	profilePhotoId: {
		type: 'String',
		default: 'kvfhdvk',
	},
	password: {
		type: 'String',
		required: true,
	},
})

module.exports = mongoose.model('User', UserSchema)
