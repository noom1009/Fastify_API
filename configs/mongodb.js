const { MongoClient } = require('mongodb');
const url = process.env.DB_HOST;
const client = new MongoClient(url);
const dbName = process.env.DB_DATABASE;

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  //const collection = db.collection('documents');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());