import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp(`^[a-zA-Z]`)).required(),
    year: Joi.number().min(2000).max(new Date().getFullYear()).required(),
    price: Joi.number().min(1).max(100000).required()
})