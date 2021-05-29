const { 
  createProduct,
} = require('../models/ProductsModel');

const create = async (title, description, price, category) => {
  const created = await createProduct(title, description, price, category);
  return created;
};

module.exports = {
  create,
};