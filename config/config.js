const argv = require('yargs')
                .command('crear','Crear un elemento por hacer',{
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    }
                })
                .command('actualizar','Actualiza el estado completado de una tarea',{
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    },
                    completado:{
                        default: true,
                        alias: 'c',
                        desc:'Marca como completado o pendiente la tarea'
                    }
                })
                .command('eliminar','Elimina la nota',{
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    },
                    eliminar:{                        
                        alias: 'e',
                        desc:'Elimina una nota seleccionada'
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}