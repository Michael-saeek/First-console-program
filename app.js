
const { crearArchivo } = require('./helpers/multiplicar')

const argv = require('yargs')
    .option('b',  {
        alias: 'base', 
        type: 'number',
        demandOption: true,
    })  
    .option('nf', {
        alias: 'nameFile',
        type: 'string',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .check((argv, options) => {
        console.log('ejecutando el check',  argv)
        if (isNaN(argv.b)) {
             throw 'La base tiene que ser un numero'
        }


      return true;
 
     })
    .argv;


console.clear()
console.log(argv);


let base = argv.b
let nf = argv.nf
let l = argv.l


crearArchivo(base, nf, l)
.then(nameFile => console.log(nameFile + ' file created'))
.catch(err => console.log(err))
