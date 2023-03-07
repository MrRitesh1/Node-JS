const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);

// app.use(express.static(publicPath));

//remov file extension
app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/home', (_, resp) => {
    resp.sendFile(`${publicPath}/home.html`)
})
app.get('/abbut', (_, resp) => {
    resp.sendFile(`${publicPath}/abbut.html`)
})
app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/noPages.html`)
})
app.listen(2222);