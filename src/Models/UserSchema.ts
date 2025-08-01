import Joi from 'joi'

export const Student = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required().min(5),
    grade: Joi.string().required().length(1),
    email: Joi.string().required().email(),
    createdAt: Joi.date()
})