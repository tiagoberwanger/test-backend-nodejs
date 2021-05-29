const { Router } = require('express');
const { 
  create
} = require('../services/ProductsService');

const STATUS_CREATED = 201;
const STATUS_UNPROCESSABLE= 422;

const route = new Router();

route.post('/', async (req, res) => {
    const { title, description, price, category } = req.body;  
    const created = await create(title, description, price, category);
    
    if (!create) res.status(STATUS_UNPROCESSABLE).json({ message: 'Unable to create product' });
    return res.status(STATUS_CREATED).json(created);
  });

module.exports = route;