var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1 style="color: green;">Hello World! From Tassapol Lojaras : 5711404826</h1><br><h1 style="color: blue;">Hello World! From Jetarin Taloet : 5711407085</h1>');
}).listen(8080);
