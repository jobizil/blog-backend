const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const CommentSchema = new Schema({
	comment: { type: 'String', required: true },
	articleId: {
		type: Schema.ObjectId,
		ref: 'Article',
		required: true,
	},
	authorId: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true,
	},
})

module.exports = mongoose.model('Comment', CommentSchema)
