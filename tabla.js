

const { alias } = require('yargs');
// Importamos la variable crearArchivo desde multiplicar a Tabla5
const { crearArchivo } = require('./helpers/multiplicar.js');
// importamos yargs a Tabla5
const argv = require('./config/yargs');


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
 .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
 .catch( err => console.log(err));
