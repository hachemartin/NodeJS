// módulo http
const http = require('http');

const colors = require('colors');


// FORMA 1 - función constante fuera 
const handleServer = function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});    // le decimos que el tipo de respuesta, la cabecera, que damos es de 200 (https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
    // cada vez que alguien entra, responderá esto:
    res.write('<h1>Hola Mundo</h1>');
    res.end();  // termina la respuesta y podrá seguir recibiendo peticiones de otros usuarios
}

// creamos servidor
const server = http.createServer(handleServer);

server.listen(3000, function() {
    console.log('Server on port 3000'.yellow);
});


/*
// FORMA 2 - función dentro
// creamos servidor (requiere, response)
http.createServer(function (req, res) {
    
    res.writeHead(200, {'content-type': 'text/html'});    // le decimos que el tipo de respuesta, la cabecera, que damos es de 200 (https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
    // cada vez que alguien entra, responderá esto:
    res.write('<h1>Hola Mundo</h1>');
    res.end();  // termina la respuesta y podrá seguir recibiendo peticiones de otros usuarios
    // el puerto en el que va a escuchar
}).listen(3000);
*/