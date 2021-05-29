const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createProduct = async (title, description, price, category) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('catalog').insertOne({ 
      title, description, price, category 
    }));
  return ({
    _id: insertedId, title, description, price, category
  });
};

const getProductById = async (id) => {
  const productById = await connection()
    .then((db) => db.collection('catalog').findOne({_id: ObjectId(id) }));
  return productById;

};

const updateProduct = async (id, category) => {
  const updatedProduct = await connection()
    .then((db) => db.collection('catalog').updateOne(
      db.collection('catalog').findOne({_id: ObjectId(id) }),
      {$set:{ category }},));
  return updatedProduct;
};

const getAllProducts = async () => {
  const products = await connection()
    .then((db) => db.collection('catalog').find().toArray());
  return products;
};

const deleteProduct = async (id) => {
  const product = await connection()
    .then((db) => db.collection('catalog').deleteOne({_id: ObjectId(id) }));
  return product;
};

const filterProduct = async (text) => {
  const productsFound = await connection()
    .then((db) => db.collection('catalog').find({ $text: { $search: text }}));
    return productsFound;
}



  module.exports = {
    createProduct,
    getProductById,
    updateProduct,
    getAllProducts,
    deleteProduct,
    filterProduct
  };