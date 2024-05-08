const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is working');
});