const { Router } = require('express');
const { 
  create,
  edit,
  getAll,
  exclude,
  filter
} = require('../services/ProductsService');

const FieldsValidations = require('../utils/FieldsValidations')

const route = new Router();

route.post('/', FieldsValidations, create);

route.put('/:id', FieldsValidations, edit);

route.get('/', getAll);

route.delete('/:id', exclude);

route.get('/search', filter)

module.exports = route;