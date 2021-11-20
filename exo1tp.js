const fs = require('fs')
// utf8 pour eviter le <buffer>
fs.readFile('file.txt', 'utf8' , (filen, data) => {
  if (filen) {
    console.error(filen)
  }
  console.log(data)
})