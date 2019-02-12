const argv = require('./config/config').argv;
const tareas = require('./logica/logica');
const colors = require('colors');
//const argv = require('yargs').argv;

console.log(argv);

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
        console.log("Se completa la lista pendiente")
    break;
    default:
    console.log("Comando no reconocido")
}
