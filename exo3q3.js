// src = stackoverflow.com/questions/20086849/how-to-read-from-stdin-line-by-line-in-node

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var fs=require("fs");
              // filename,data, callback
	fs.writeFile("date.txt",line.toString(),function(){});
    console.log(line);
})