const { 
  createProduct,
  updateProduct, 
  getProductById,
  getAllProducts,
  deleteProduct,
  filterProduct,
  projectByCategory
} = require('../models/ProductsModel');

const { OK, CREATED, NOT_FOUND, UNPROCESSABLE } = require('../utils/StatusCodes')

const create = async (req, res) => {
  const { title, description, price, category } = req.body;  
  const created = await createProduct(title, description, price, category);
  
  if (!create) res.status(UNPROCESSABLE).json({ message: 'Unable to create product' });
  return res.status(CREATED).json(created);
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, category } = req.body;
  const updated = await updateProduct(id, title, description, price, category);

  if (!updated) res.status(UNPROCESSABLE).json({ message: 'Unable to update product'});
  return res.status(OK).json({ message: `Product ${id} updated successfully`});
};

const getAll = async (_req, res) => {
  const allProducts = await getAllProducts();
  return res.status(OK).json(allProducts);
};

const exclude = async (req, res) => {
  const { id } = req.params;
  const wasFounded = await getProductById(id)
  console.log(wasFounded)
  if (!wasFounded) {
    return res.status(NOT_FOUND).json({ message: "product not found" })
  }
  await deleteProduct(id);

  return res.status(OK).json({ message: `Product ${id} deleted successfully`});
};

const filter = async (req, res) => {
  const { q } = req.query;
  const filtered = await filterProduct(q)
  return res.status(OK).json(filtered);
};

const project = async (req, res) => {
  const { category } = req.body;
  const projection = await projectByCategory(category);
  return res.status(OK).json(projection);
}

module.exports = {
  create,
  edit,
  getAll,
  exclude,
  filter,
  project
};