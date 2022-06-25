const { crearArchivo } = require('./helpers/multiplicar')
const  argv  = require('./config/yargs')
const colors = require('colors')

console.clear();



    crearArchivo(argv.b, argv.l, argv.h)
    .then( (nombredeArchivo) => console.log(nombredeArchivo.white.bgBlack, 'creada'.red, `en archivo .txt `))
    .catch( err => console.log(err))


