const argv = require('./config/config').argv;
const tareas = require('./logica/logica');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'crear':
    let tarea = tareas.crear(argv.descripcion)
        console.log(tarea);
    break;

    case 'listar':

        let listado = tareas.getListado();

        for (let tarea of listado){
            console.log("=====Tareas Pendientes=====".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado)
            console.log("===========================".green);
        }
    break;

    case 'actualizar':
        let actualizar = tareas.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar)
    break;

    case 'eliminar':
        tareas.eliminar(argv.descripcion)
    break;

    default:
    console.log("Comando no reconocido")
}
