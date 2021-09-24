const { response } = require('express');

const obtenerEventos = (req, res = response, next) => {
    return res.json({
        ok: true,
        msg: 'Obtener eventos',
    });
};

const obtenerEvento = (req, res = response, next) => {
    return res.json({
        ok: true,
        msg: 'Obtener evento',
    });
};

const crearEvento = (req, res = response, next) => {
    return res.json({
        ok: true,
        msg: 'Crear evento',
    });
};

const actualizarEvento = (req, res = response, next) => {
    return res.json({
        ok: true,
        msg: 'Actualizar evento',
    });
};

const eliminarEvento = (req, res = response, next) => {
    return res.json({
        ok: true,
        msg: 'Borrar evento',
    });
};

module.exports = {
    crearEvento,
    obtenerEvento,
    obtenerEventos,
    actualizarEvento,
    eliminarEvento,
};
