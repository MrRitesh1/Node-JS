const express = require('express');
require('./1config');
const delars = require('./delars_Schemas_Model');

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
    let data = new delars(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(result)
    resp.send("Done");
});

app.listen(5000);
