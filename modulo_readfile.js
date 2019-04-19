// llamamos módulos preconstruidos de Nodejs
const fs = require('fs');


// abrimos archivo y creamos función
fs.readFile('./texto.txt', function(err, data) {
    if(err) {
        console.log(err);
    }
    //console.log(data);    // muestra el texto en crudo
    console.log(data.toLocaleString()); // convertimos el texto en string

})