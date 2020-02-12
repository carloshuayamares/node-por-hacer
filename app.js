const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let command = argv._[0];

switch (command) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listar = porHacer.getListado(argv.completado);
        for (let tarea of listar) {
            console.log('===========POR HACER==========='.green);
            console.log(tarea.descripcion);
            console.log('ESTADO:', tarea.completado);
            console.log('==============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando introcucido ireconocible.');
}


//console.log(argv);