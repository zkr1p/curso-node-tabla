// Sirve para controlar nuestra app por argumentos de terminal 

const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: ' es la base de la tabla de multiplicar'
                })

                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    describe: 'ingresa hasta que numero debe multiplicar multiplicar'
                })

                .option('l', {
                   alias: 'listar',
                   type: "boolean",
                   default: false,
                   describe: 'muestra la tabla en consola'

                })
                
                .check((argv, option) => {
                    if( isNaN( argv.b )){
                       throw 'La base tiene que ser un numero'
                    }
                    return true;
                  
                })
                

                .check((argv, option) => {
                    if( isNaN( argv.h )){
                       throw 'este argumento tiene que ser un numero'
                    }
                    return true;

                })
                .argv;

//exportamos

module.exports = argv;