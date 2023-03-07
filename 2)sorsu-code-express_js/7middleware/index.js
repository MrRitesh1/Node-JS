const express = require('express');
const app = express();


const reqFilter = (req, resp, next) => {
    // console.log('reqFilter');
    if (!req.quire.age) {
        resp.send("Please provide age");
    } else {
        next();
    }
}

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcom pages................ ');
});
app.get('/usar', (req, res) => {
    res.send('Usar pages............');
});

app.listen(5100);