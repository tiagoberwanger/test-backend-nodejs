const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/CatalogManagement';
const DB_NAME = 'CatalogManagement';

const connection = () => MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((conn) => conn.db(DB_NAME))
  .catch((_err) => {
    process.exit();
  });

module.exports = connection;