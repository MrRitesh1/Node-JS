const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const dataBesa = 'onlines';// dataBase name 
const client = new MongoClient(url);

async function dataBaseConnect() {
    let result = await client.connect();
    let db = result.db(dataBesa);
    return db.collection('sells'); // callection name 
}

// console.warn(dataBaseConnect());

module.exports = dataBaseConnect;