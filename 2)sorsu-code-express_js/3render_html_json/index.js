
// npm i express 

const express = require('express');
const app = express();

// creat a web pagis............

app.get('', (req, resp) => {
    resp.send(`
    <h1>Hello, This is Home Pages....</h1>
    <a href = "/abbut">go to abbut </a>
    `);
});


app.get('/abbut', (req, resp) => {
    resp.send(`
  
  <input type="text" placeholder="Usar Name" value="${req.query.name}"/> 
  <button> Click Me </botton><br> 
  <button><a href = "/">go to home </a></button>

  `);
});

app.get('/help', (req, resp) => {
    resp.send([
        {
            name: 'anil',
            email: 'anil@gmail.com'
        },
        {
            name: 'Jignesh',
            email: 'jignesh@gmail.com'
        },
        {
            name: 'Chirag',
            email: 'chirag@gmail.com'
        }
    ]);
});

// localhost:2200 (port)
app.listen(2200);