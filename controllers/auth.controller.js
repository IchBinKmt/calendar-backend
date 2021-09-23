const { response } = require('express');

const crearUsuario = (req, res = response) => {
    const { name, email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'registro',
        user: req.body,
    });
};

const loginUsuario = (req, res = response) => {
    const { name, email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
    });
};

const revalidarToken = (req, res = response) => {};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
};
