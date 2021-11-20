var http = require('http');
var port=8080;
var server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write( "<html><head>Bonjour le monde</head></html>" );
       res.end();
            });
               server.listen(port);
               console.log("serveur http démarré sur le port "+port);
