/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const {
    crearUsuario,
    loginUsuario,
    revalidarToken,
} = require('../controllers/auth.controller');

router.post('/', loginUsuario);
router.post('/new', crearUsuario);
router.get('/renew', revalidarToken);

module.exports = router;