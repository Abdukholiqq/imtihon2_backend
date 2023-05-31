import Joi from "joi";

export const LoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const PostSchema = Joi.object({
  date: Joi.string().max(10),
  time: Joi.string().max(6),
  direction: Joi.string().max(50),
  int_direction: Joi.string().max(50),
  event: Joi.string().max(7),
  link: Joi.string().max(100),
  full_name: Joi.string().max(50),
  profession: Joi.string().max(50),
  phone_number: Joi.number().max(12),
  additional_number: Joi.number().max(12),
  post_title: Joi.string().max(50),
  post_desc: Joi.string().max(5000),
  category_name: Joi.string().max(32),
  sub_category: Joi.string().max(32),
  img: Joi.string().pattern(new RegExp("((jpe?g|png|gif|bmp))$")).required(),
});
