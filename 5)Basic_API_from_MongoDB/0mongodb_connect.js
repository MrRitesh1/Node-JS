const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const dataBase = 'onlines';// dataBase name 
const client = new MongoClient(url);

async function mongodbConnect() {
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection('sells'); // callection name 
}

// console.warn(mongodbConnect());

module.exports = mongodbConnect;