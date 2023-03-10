const express = require('express');
require('./1config');
const delars = require('./delars_Schemas_Model');
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
    console.log(req.params.key);
    let data = await delars.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "itame": { $regex: req.params.key } },
                // { "age": { $regex: req.params.key } }
            ]
        }
    );
    resp.send(data);
    resp.send("Search Done");
})

app.listen(5000);
