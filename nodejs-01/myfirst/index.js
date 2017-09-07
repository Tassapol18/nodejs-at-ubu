var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1 style="color: red;">Hello World!</h1><h2 style="color: blue;">From Tassapol Lojaras : 5711404826 </h2><h2 style="color: green;">From Jetarin Taloet : 5711407085 </h2><h3 style="color:Magenta;">Welcome</h3>');
}).listen(8080);
