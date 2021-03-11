'use strict'
const mongoose = require('mongoose')
const slugify = require('slugify')
const { Schema } = require('mongoose')

const ArticleSchema = new Schema({
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
	slug: String,
})

ArticleSchema.pre('save', function (next) {
	this.slug = slugify(this.title, {
		lower: true,
	})
	next()
})
module.exports = mongoose.model('Article', ArticleSchema)
