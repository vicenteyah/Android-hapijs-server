const Joi = require('joi')

module.exports = {
    userSchema: Joi.object({
        name: Joi.string().optional(),
        lastName: Joi.string().optional(),
        address: Joi.string().optional(),
        phone: Joi.number().optional(),
        email: Joi.string().optional(),
        gender: Joi.string().optional(),
        birthDate: Joi.string().optional()
    })
}