const mongoose = require('mongoose');

// Schema Creat ......
const delarsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    itam: String
});


// Model Creat ......
module.exports = mongoose.model('delars', delarsSchema);