const express = require('express');
const mongodbConnect = require('./0mongodb_connect');
const app = express();
// Postman And Recvest thi Data gat karvana hoy ryare
app.use(express.json());

app.post("/", async (req, resp) => {
    // resp.send(req.body);
    // console.log(req.body);
    let data = await mongodbConnect();
    let result = data.insertOne(req.body);

    resp.send(result);

});
app.listen(9000);