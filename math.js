// creación del objeto Math
const Math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if(x2 == 0) {
        console.log('No se puede dividir por 0');
    } else {
        return x1 / x2;
    }
}

// añade propiedades al objeto
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// exporta el objeto
module.exports = Math;

/*
// todas estas funciones las exportamos usando un objeto
// sólo exporta una propiedad del objeto
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/

// pero también podemos exportar una función
function hello(name) {
    console.log('Hola', name);
}

//module.exports = hello;