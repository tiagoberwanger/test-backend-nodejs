const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = `${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`;
const DB_NAME = process.env.DB_NAME;

const connection = () => MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((conn) => conn.db(DB_NAME))
  .catch((_err) => {
    process.exit();
  });

module.exports = connection;