const fs = require('fs');

let listado = [];

const guardarjson = () => {
    let data = JSON.stringify(listado);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo grabar')
    });
}

const cargardb = () => {

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

const getListado = () => {
    cargardb();
    return listado
}

const actualizar = (descripcion, completado = true) => {
    cargardb();

    //Solicitamos el index que coincida con la descripcion de la tarea
    let index = listado.findIndex(i => {
        return i.descripcion === descripcion
    });

    // Se cambia la propiedad de la tarea seleccionada
    if (index >= 0) {
        listado[index].completado = completado;
        guardarjson();
        return true;
    } else {
        false;
    }

}

const eliminar = (descripcion) => {
    cargardb();

    let index = listado.findIndex(i => {
        return i.descripcion === descripcion
    });

    if (index >= 0) {
        listado.splice(index);
        guardarjson();
        console.log('Eliminacion exitosa')
    } else {
        console.log('Error al eliminar')
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}