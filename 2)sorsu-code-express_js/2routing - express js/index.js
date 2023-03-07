// npm i express 

const express = require('express');
const app = express();

// creat a web pagis............

app.get('', (req, resp) => {
    console.log("data sent by browser =>>>>> ", req.query);
    // resp.send('Hello, This is Home Pages....');
    resp.send('Hello, This is Home Pages....' + req.query.name);
});


app.get('/abbut', (req, resp) => {
    resp.send('Welcome, This is Abbut Pages....');
});
// localhost:2200 (port)
// app.listen(2200);