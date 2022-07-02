
const { crearArchivo } = require ('./helpers/multiplicar')
var colors = require('colors');
const argv = require('./config/yargs')




console.clear()









crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.gray, 'creado'))
    .catch(err => console.log(err))