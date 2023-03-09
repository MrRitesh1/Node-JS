const express = require('express');
const mongodbConnect = require('./0mongodb_connect');
const app = express();

app.use(express.json());

app.put("/", async (req, resp) => {
    let data = await mongodbConnect();
    let result = data.updateOne(
        { name: req.body.name },// dynamik updet for api in postman 
        // { name: "Haresh" },
        // { $set: { name: "Haresh" } }
        { $set: req.body }

    );
    console.log(req.body);
    resp.send({ result: "Updeted" })

})

app.listen(9000);