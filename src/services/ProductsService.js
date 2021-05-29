const { 
  createProduct,
  updateProduct, 
  getProductById
} = require('../models/ProductsModel');

const create = async (title, description, price, category) => {
  const created = await createProduct(title, description, price, category);
  return created;
};

const edit = async (id, category) => {
  await updateProduct(id, category);
  const update = await getProductById(id);
  return update;
};

module.exports = {
  create,
  edit
};