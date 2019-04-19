// llamamos módulos preconstruidos de Nodejs
// MODULOS CORE os, path
const os = require('os');
const path = require('path');
const fs = require('fs');


// sistema plataforma que usamos
console.log(os.platform());
// versión del sistema
console.log(os.release());
// memoria que tenemos libre
console.log('Free mem: ', os.freemem());
// total de la memoria
console.log('Total mem: ', os.totalmem());

// CREAR ARCHIVO NUEVO, forma asíncrona
// función con callback si hubiera error
fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
})

//console.log(process.env.PATH.split(path.delimiter));
//console.log(process.env.PATH);

// primero veremos esta línea de código y después la del archivo creado, porque Nodejs ejecuta todo el código, y el sistema operativo es el que ha creado el archivo
console.log('Última línea de código');

// lo contrario es lo que estamos acostumbrados a hacer con sentencias bloqueantes o síncronas.
// const texto = fs.writeFile('blabla.txt', '');

