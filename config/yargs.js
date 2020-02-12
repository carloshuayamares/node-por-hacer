const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Crear acción.'
}
const completado = {
    alias: 'c',
    defult: true

}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea seleccionada', {
        descripcion
    })
    .command('listar', 'Muestra en pantalla la lista de tareas', {
        completado
    })
    .help().argv;

module.exports = {
    argv
}