/*
    Event routes
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const {
    obtenerEventos,
    obtenerEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
} = require('../controllers/events.controller');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
router.use(validarJWT);

router.get('/', [validarCampos], obtenerEventos);
router.get('/:id', obtenerEvento);
router.post(
    '/',
    [
        check('title', 'El titulo debe ser obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de fin es obligatoria').custom(isDate),
        validarCampos,
    ],
    crearEvento
);
router.put('/:id', actualizarEvento);
router.delete('/:id', eliminarEvento);

module.exports = router;
