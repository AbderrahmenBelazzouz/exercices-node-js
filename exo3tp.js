// pg 36
var fs = require("fs");
var stream = fs.createWriteStream("date.txt");


// créer un stream en écriture et d’afficher la date du système 
var date = new Date();
        //  event     listner
stream.once('open', function(fd) { // once: déclancher fct une seule fois 
  stream.write(" "+date);
  stream.end();
});
console.log("fichier générer est ecrit avec succées !");
