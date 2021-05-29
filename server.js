const express = require('express');
const ProductsController = require('./src/controllers/ProductsController');

const app = express();
const PORT = 3000

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/products', ProductsController);

app.listen(PORT, () => {
  console.log(`running at ${PORT}`)
})