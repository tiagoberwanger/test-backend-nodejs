const Joi = require('joi');

const { BAD_REQUEST, INTERNAL_ERROR } = require('../utils/StatusCodes')

const schema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().required(),
  category: Joi.string().min(3).required()
});

const FieldsValidations = (req, res, next) => {
  const { title, description, price, category } = req.body;
  const { error } = schema.validate({ title, description, price, category });
  try {
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.details[0].message });
    }
    next();
  } catch (err) {
    res.status(INTERNAL_ERROR).json({ message: err.message });
  }
};

module.exports = FieldsValidations;
