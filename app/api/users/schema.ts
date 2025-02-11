import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().min(3).max(20).required(),
  lastName: Joi.string().min(3).max(20).required(),
  userName: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(8).max(32).required(),
});

const updateSchema = Joi.object({
  firstName: Joi.string().min(3).max(20).optional(),
  lastName: Joi.string().min(3).max(20).optional(),
  userName: Joi.string().min(3).max(20).optional(),
  password: Joi.string().min(8).max(32).optional(),
});

export { schema, updateSchema };
