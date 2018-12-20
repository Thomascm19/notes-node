const fs = require('fs');

let listado = [];

const guardarjson = ()=>{
    let data = JSON.stringify(listado);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) 
            throw new Error('No se pudo grabar')
      });
}

const cargardb = ()=>{

    try {
        listado = require('../db/data.json');
    } catch (error) {
        listado = [];
    }

    
}

const crear = (descripcion) => {

    cargardb();

    let tarea = {
        descripcion,
        completado: false,
    };

    listado.push(tarea);

    guardarjson();
    return tarea; 
}

module.exports = {
    crear
}