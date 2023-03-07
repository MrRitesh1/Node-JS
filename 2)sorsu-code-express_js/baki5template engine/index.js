// Template Engine
//npm i ejs

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profil.ejs', (_, resp) => {
    resp.render(`profil`)
})
app.listen(2220);