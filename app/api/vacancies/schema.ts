import Joi from "joi";

const schema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
  requirements: Joi.array().items(Joi.string().required()).required(),
  urgent: Joi.boolean().required(),
  period: Joi.string().min(3).required(),
  contactLink: Joi.string().min(3).required(),
});

const updateSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  description: Joi.string().min(3).optional(),
  requirements: Joi.array().items(Joi.string().required()).optional(),
  urgent: Joi.boolean().optional(),
  period: Joi.string().min(3).optional(),
  contactLink: Joi.string().min(3).optional(),
});

export { schema, updateSchema };
