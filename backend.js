var http = require('https');
let port = 8080;
let fs = require('fs');

const server = http.createServer((req, res) => {
    fs.createReadStream('index.html').pipe(res)
})

server.listen(port);
console.log('Node.js web server at port ${port} is running..')