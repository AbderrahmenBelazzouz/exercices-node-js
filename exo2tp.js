var event=require("events");
var util=require("util");
var http = require('http');
var port1=3000;
var port2=3001;

function Serveur(port){
    var server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(
                "<html><body><h1>Bonjour Le Monde, vous etes sur le port "+ port +"</h1></body></html>"
                );
               res.end();
            });
            server.listen(port);
}
util.inherits(Serveur, event.EventEmitter);

// quest 2
var serveur1 = new Serveur(port1);
var serveur2 = new Serveur(port2);

// quest 3 
serveur1.addListener("conn",function(){
        console.log(" démarrer une connexion sur le Port "+port1);
    });
serveur2.addListener("conn",function(){
    console.log(" démarrer une connexion sur le Port "+port2);
});

// quest 4
    serveur1.emit("conn");
    serveur2.emit("conn");
