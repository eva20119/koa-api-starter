const Joi = require('@hapi/joi');

const productSchema = {
    _id: Joi.string(),
    productid: Joi.string(),
    name: Joi.string().required(),
    price: Joi.number(),
    quantity: Joi.number(),
    description: Joi.string(),
    tenantid: Joi.string(),
};

module.exports = obj => Joi.validate(obj, productSchema, { allowUnknown: true });