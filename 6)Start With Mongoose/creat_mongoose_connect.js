// npm i mongoose install 

const mongoose = require('mongoose');

// database cannect 
// await mongoose.connect("mongodb://localhost:27017/onlines"); 
mongoose.connect("mongodb://0.0.0.0:27017/onlines"); // database cannect 
// Schemas creat.........
const ProductSchema = new mongoose.Schema({
    // DataBase Velidesan.... 
    name: String,
    // age: Number
});

// Model creat........
const main = async () => {
    const ProductModel = mongoose.model('sells', ProductSchema);
    let data = new ProductModel({ name: "Montu", age: 15 });
    let result = await data.save();
    console.log(result);

}

main();