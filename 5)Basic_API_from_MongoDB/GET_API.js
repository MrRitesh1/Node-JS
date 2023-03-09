const express = require('express');
const mongodbConnect = require('./0mongodb_connect');
const app = express();

app.get('/', async (req, resp) => {
    let data = await mongodbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data);
});
app.listen(9000);