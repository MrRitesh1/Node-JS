const express = require('express');
const mongodbConnect = require('./0mongodb_connect');
const app = express();
const mongodb = require('mongodb');


app.use(express.json());

app.delete("/:_id", async (req, resp) => {
    let data = await mongodbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params._id) });
    console.log(req.params._id);
    resp.send(result);
})

app.listen(9000);