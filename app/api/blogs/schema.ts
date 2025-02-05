import Joi from "joi";

const contentSchema = Joi.object({
  type: Joi.string()
    .valid("heading", "paragraph", "image", "youtube")
    .required(),
  value: Joi.when("type", {
    is: "image",
    then: Joi.string().uri().required(),
    otherwise: Joi.string().required(),
  }).required(),
});

const contentUpdateSchema = Joi.object({
  id: Joi.number().optional(),
  type: Joi.string()
    .valid("heading", "paragraph", "image", "youtube")
    .required(),
  value: Joi.when("type", {
    is: "image",
    then: Joi.string().uri().required(),
    otherwise: Joi.string().required(),
  }).optional(),
});

const blogSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  thumbnail: Joi.string().uri().optional(),
  thumbnailPublicId: Joi.string().min(1).optional(),
  content: Joi.array().items(contentSchema).min(1).required(),
});

const blogUpdateSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  description: Joi.string().min(3).optional(),
  category: Joi.string().min(3).optional(),
  thumbnail: Joi.string().uri().optional(),
  thumbnailPublicId: Joi.string().min(3).optional(),
  content: Joi.array().items(contentUpdateSchema).optional(),
});

export { blogSchema, blogUpdateSchema };
