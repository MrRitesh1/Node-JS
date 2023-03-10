const express = require('express');
require('./1config');
const delars = require('./delars_Schemas_Model');

const app = express();
app.use(express.json());

app.get("/list", async (req, resp) => {
    let data = await delars.find();
    resp.send(data);
});

app.delete("/delet/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await delars.deleteOne(req.params);
    resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await delars.updateOne(
        req.params,// condition
        {
            $set: req.body
        }
    );
    resp.send(data);
});
app.listen(5000);
