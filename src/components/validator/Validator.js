import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp(`^[[a-zA-ZА-яіІїЇёЁ]{1,20}$`)).required(),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required(),
    price: Joi.number().min(0).max(100000).required()
})