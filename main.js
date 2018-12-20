const argv = require('./config/config').argv;
const tareas = require('./logica/logica')
//const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'crear':
    let tarea = tareas.crear(argv.descripcion)
        console.log(tarea);
    break;
    case 'listar':
        console.log("Se muestran todas las listas")
    break;
    case 'actualizar':
        console.log("Se completa la lista pendiente")
    break;
    default:
    console.log("Comando no reconocido")
}
