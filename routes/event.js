/*
    Event routes
    /api/events
*/

const { Router } = require('express');
const {
    obtenerEventos,
    obtenerEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
} = require('../controllers/events.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
router.use(validarJWT);

router.get('/', obtenerEventos);
router.get('/:id', obtenerEvento);
router.post('/', crearEvento);
router.put('/:id', actualizarEvento);
router.delete('/:id', eliminarEvento);

module.exports = router;
