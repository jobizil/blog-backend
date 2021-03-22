const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const slugify = require('slugify')
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const ArticleSchema = new Schema(
	{
		title: {
			type: 'String',
			required: true,
			trim: true,
		},
		content: {
			type: 'String',
		},
		imageUrl: {
			type: 'String',
		},

		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},

		published: { type: Boolean, default: true },
		publishedAt: { type: Date, default: Date.now() },
		slug: {
			type: 'String',
			slug: 'title',
			slugPaddingSize: 4,
			unique: true,
		},
	},
	{
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	},
)

ArticleSchema.virtual('comments', {
	ref: 'Comment',
	localField: '_id',
	foreignField: 'articleId',
	justOne: false,
})

// Cascade Delete realted comments in article
ArticleSchema.pre('remove', async function (next) {
	await this.model('Comment').deleteMany({ articleId: this._id })
	next()
})

// Remove not needed data
ArticleSchema.methods.toJSON = function () {
	const obj = this.toObject()
	delete obj.__v
	delete obj.id
	return obj
}

module.exports = mongoose.model('Article', ArticleSchema)
