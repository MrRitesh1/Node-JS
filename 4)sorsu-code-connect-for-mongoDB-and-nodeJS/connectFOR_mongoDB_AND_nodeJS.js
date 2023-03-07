const { MongoClient } = require('mongodb');

// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017';
const url = 'mongodb://0.0.0.0:27017';
const dataBesa = 'onlines';
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db(dataBesa);
    let callection = db.collection('sells');
    let response = await callection.find({}).toArray();
    console.log(response);
}

getData();