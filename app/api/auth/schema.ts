import Joi from "joi";

const loginSchema = Joi.object({
  userName: Joi.string().min(3).required(),
  password: Joi.string().min(8).max(32).required(),
});

export { loginSchema };
