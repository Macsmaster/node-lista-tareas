
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear en la consola una tarea', {
        descripcion
    })
    .command('actualizar', 'Ordenar las tareas en la consola', {
        descripcion,
        completado
    })
    .command('borrar', 'Se borra la tarea de la lista', {
        descripcion,

    })

    .help()
    .argv;



module.exports = {
    argv
}