const { Router, query } = require('express');
const connection = require('../models/connection');
const { 
  create,
  edit,
  getAll,
  exclude,
  filter
} = require('../services/ProductsService');

const { filterProduct } = require('../models/ProductsModel')

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
  const { title, description, price, category } = req.body;
  const updated = await edit(id, title, description, price, category);

  if (!updated) res.status(STATUS_UNPROCESSABLE).json({ message: 'Unable to update product'});
  return res.status(STATUS_OK).json({ message: `Product ${id} updated successfully`});
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

route.get('/search', async (req, res) => {
  const { q } = req.query;
  const filtered = await filter(q)
  console.log(filtered)
  return res.status(STATUS_OK).json(filtered);
})

module.exports = route;