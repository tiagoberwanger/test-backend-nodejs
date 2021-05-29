const { 
  createProduct,
  updateProduct, 
  getProductById,
  getAllProducts,
  deleteProduct,
  filterProduct
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

const getAll = async () => {
  return await getAllProducts();
};

const exclude = async (id) => {
  const deleted = await getProductById(id);
  await deleteProduct(id);
  return deleted;
};

const getByQuery = async (query) => {
  const targetedProducts = await filterProduct(query);
  return targetedProducts;
};

module.exports = {
  create,
  edit,
  getAll,
  exclude,
  getByQuery
};