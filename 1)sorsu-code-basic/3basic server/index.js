const http = require('http');

// localhost
//Ex:- 1
http.createServer(() => {
    resp.write("<h1>Hello</h1>");
    resp.end();
}).listen(4000);


//EX:- 2
// function dataControl(req, resp) {
//     resp.write("<h1>Hello</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(5000);