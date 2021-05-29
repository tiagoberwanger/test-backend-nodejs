const { Router } = require('express');
const { 
  create,
  edit,
  getAll,
  exclude
} = require('../services/ProductsService');

const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_UNPROCESSABLE= 422;

const route = new Router();

route.post('/', async (req, res) => {
  const { title, description, price, category } = req.body;  
  const created = await create(title, description, price, category);
  
  if (!create) res.status(STATUS_UNPROCESSABLE).json({ message: 'Unable to create product' });
  return res.status(STATUS_CREATED).json(created);
});

route.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  const updated = await edit(id, category);

  if (!updated) res.status(STATUS_UNPROCESSABLE).json({ message: 'Unable to update product'});
  return res.status(STATUS_OK).json(updated);
});

route.get('/', async (_req, res) => {
  const allProducts = await getAll();
  return res.status(STATUS_OK).json(allProducts);
});

route.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await exclude(id);

  if (!deleted) return res.status(STATUS_UNPROCESSABLE).json({ message: 'Unable to delete product'});
  return res.status(STATUS_OK).json({ message: `Product ${id} deleted successfully`});
});

module.exports = route;