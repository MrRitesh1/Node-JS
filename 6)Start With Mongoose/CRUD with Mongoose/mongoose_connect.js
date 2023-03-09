// npm i mongoose install 
const mongoose = require('mongoose');
// await mongoose.connect("mongodb://localhost:27017/onlines"); // database cannect 
mongoose.connect("mongodb://0.0.0.0:27017/onlines"); // database cannect 

// Schemas creat.........
const ProductSchema = new mongoose.Schema({
    // DataBase Velidesan.... 
    name: String,
    price: Number,
    model: String,
    category: String
});

// Model creat........
const saveInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel(
        {
            // Velue From ProductSchema
            name: "Iphon",
            price: 130000,
            model: "14Pro",
            category: "Mobile"
        });
    let result = await data.save();
    console.log(result);

}

//Update Model creat........
const updateInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.updateOne(
        { name: 'Sony' },
        {
            $set: { price: 76900, model: 'S11Pro +' }
        }
    );
    console.log(data);
}

//Delete Model creat........
const deleteInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.deleteOne({ _id: '6409d4f21d0ca9edf86b3021' })

    console.log(data);
}

const findInDB = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    // All find data......
    // let data = await ProductModel.find();
    let data = await ProductModel.find(
        { name: "Sony" });

    console.log(data);
}
// All functions coll.........
// saveInDB();
// updateInDB();
// deleteInDB();
findInDB();
