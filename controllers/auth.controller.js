const { response } = require('express');

const crearUsuario = (req, res = response) => {
    res.json({
        ok: true,
    });
};

const loginUsuario = (req, res = response) => {};

const revalidarToken = (req, res = response) => {};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
};
