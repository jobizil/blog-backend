const { Schema } = require('mongoose')

const CommentSchema = new Schema({
	comment: [{ type: 'String' }],
	articleID: {
		type: Schema.ObjectId,
		ref: 'Article',
		required: true,
	},
	userId: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true,
	},
})

module.exports = mongoose.model('Comment', CommentSchema)
