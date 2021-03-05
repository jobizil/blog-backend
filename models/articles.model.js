const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// const { Schema } = mongoose()

const ArticleSchema = new Schema({
  title: {
    type: 'String',
    required: true,
  },
  content: {
    type: 'String',
  },
  imageUrl: {
    type: 'String',
  },

  email: {
    type: 'String',
    required: true,
    unique: true,
  },
  password: {
    type: 'String',
    required: true,
  },
  userId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Article', ArticleSchema);
