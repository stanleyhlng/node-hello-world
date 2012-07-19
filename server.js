var http = require('http'),
    os = require('os'),
    port = 8000;

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello World\n');
}).listen(port);

console.log('Server is running at http://' + os.hostname() + ":" + port);
