const express = require('express');
const reqFilter = require('./middlewer');
const app = express();
const route = express.Router();


// app.use(reqFilter);
route.use(reqFilter);
app.get('/', (req, res) => {
    res.send('Welcom pages................ ');
});
// app.get('/home', reqFilter, (req, res) => {
//     res.send('Home pages............');
// });
app.get('/home', reqFilter, (req, res) => {
    res.send('Home pages............');
});
route.get('/usar', (req, res) => {
    res.send('Usar pages............');
});
route.get('/contec', (req, res) => {
    res.send('Contec pages............');
});

app.use('/', route);

app.listen(5200);