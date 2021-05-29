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

const updateProduct = async (id, category) => {
  const updatedProduct = await connection()
    .then((db) => db.collection('catalog').updateOne(
      db.collection('catalog').findOne({_id: ObjectId(id) }),
      {$set:{ category }},));
  return updatedProduct;
};


  module.exports = {
    createProduct,
    updateProduct
  };