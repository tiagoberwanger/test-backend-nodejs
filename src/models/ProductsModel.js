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

const updateProduct = async (id, title, description, price, category) => {
  const updatedProduct = await connection()
    .then((db) => db.collection('catalog').updateOne(
      {_id: ObjectId(id)},
      {$set:{
        title: title, 
        description: description, 
        price: price,
        category: category
      }},
    ));
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
    .then((db) => db.collection('catalog').find(
      { $or: [
        { "title": {$in: [text]}}, 
        { "category": {$in: [text]}}
      ] 
      }
    ).toArray());
  return productsFound;
}

const projectByCategory = async (category) => {
  const projection = await connection()
    .then((db) => db.collection('catalog').aggregate(
      [ 
        { $match: { category: category } },
        { $project : { _id: 0, title: 1 } } 
      ]
    ).toArray())
  return projection;
}

  module.exports = {
    createProduct,
    getProductById,
    updateProduct,
    getAllProducts,
    deleteProduct,
    filterProduct,
    projectByCategory
  };