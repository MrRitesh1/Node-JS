const http = require('http');
const data = require('./api');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application\json' });
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(1000);