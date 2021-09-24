const { response } = require('express');
const Evento = require('../models/Evento');

const obtenerEventos = async (req, res = response, next) => {
    const eventos = await Evento.find().populate('user', 'name');
    return res.json({
        ok: true,
        msg: 'Obtener eventos',
        events: eventos,
    });
};

const obtenerEvento = (req, res = response, next) => {
    return res.json({
        ok: true,
        msg: 'Obtener evento',
    });
};

const crearEvento = async (req, res = response, next) => {
    const evento = new Evento(req.body);
    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.json({
            ok: true,
            evento: eventoGuardado,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',
        });
    }
    return res.json({
        ok: true,
        msg: 'Crear evento',
    });
};

const actualizarEvento = async (req, res = response, next) => {
    const eventoId = req.params.id;
    const uid = req.uid;
    try {
        const evento = await Evento.findById(eventoId);
        if (!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id',
            });
        }

        if (evento.user.toString() !== uid) {
            res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para editar este evento',
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid,
        };

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {
            new: true,
        });

        res.json({
            ok: true,
            event: eventoActualizado,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',
        });
    }
};

const eliminarEvento = async (req, res = response, next) => {
    const eventoId = req.params.id;
    const uid = req.uid;
    try {
        const evento = await Evento.findById(eventoId);
        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id',
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para editar este evento',
            });
        }

        const eventoActualizado = await Evento.findByIdAndDelete(eventoId);

        res.json({
            ok: true,
            msg: 'Evento eliminado con exito',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',
        });
    }
};

module.exports = {
    crearEvento,
    obtenerEvento,
    obtenerEventos,
    actualizarEvento,
    eliminarEvento,
};
