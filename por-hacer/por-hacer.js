const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    /*listadoPorHacer = require('../db/data.json');
    //console.log(listadoPorHacer);
    if (listadoPorHacer === '')
        listadoPorHacer = [];*/
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = (completado) => {

    cargarDB();

    return listadoPorHacer.filter(tarea => {
        return tarea.completado === JSON.parse(completado);
    })

    /*if (nuevaLista.length === listadoPorHacer.length) {
        return listadoPorHacer;
    } else {
        listadoPorHacer = nuevaLista;
        return listadoPorHacer
    }*/
}



const actualizar = (descripcion, completado) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        if (completado === 'false') {
            listadoPorHacer[index].completado = false;
        } else {
            listadoPorHacer[index].completado = true;
        }
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoArreglo = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })

    if (nuevoArreglo.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoArreglo;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}