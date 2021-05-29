const { Router } = require('express');
const { 
  create,
  edit,
  getAll,
  exclude,
  filter
} = require('../services/ProductsService');

const FieldsValidations = require('../utils/FieldsValidations')

const { OK, CREATED, UNPROCESSABLE } = require('../utils/StatusCodes')

const route = new Router();

route.post('/', FieldsValidations, async (req, res) => {
  const { title, description, price, category } = req.body;  
  const created = await create(title, description, price, category);
  
  if (!create) res.status(UNPROCESSABLE).json({ message: 'Unable to create product' });
  return res.status(CREATED).json(created);
});

route.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, price, category } = req.body;
  const updated = await edit(id, title, description, price, category);

  if (!updated) res.status(UNPROCESSABLE).json({ message: 'Unable to update product'});
  return res.status(OK).json({ message: `Product ${id} updated successfully`});
});

route.get('/', async (_req, res) => {
  const allProducts = await getAll();
  return res.status(OK).json(allProducts);
});

route.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await exclude(id);

  if (!deleted) return res.status(UNPROCESSABLE).json({ message: 'Unable to delete product'});
  return res.status(OK).json({ message: `Product ${id} deleted successfully`});
});

route.get('/search', async (req, res) => {
  const { q } = req.query;
  const filtered = await filter(q)
  console.log(filtered)
  return res.status(OK).json(filtered);
})

module.exports = route;