const Joi = require('joi')

// Create Article Validation
const createArticleValidation = (data) => {
  const articleSchema = Joi.object({
    title: Joi.string().required().min(3).trim(),
    content: Joi.string().min(10).required(),
    author: Joi.string().required().trim(),
  })
  return articleSchema.validate(data)
}

module.exports = { createArticleValidation }
