const express = require('express');
const router = express.Router();
const controller = require('../controller/mainController');
const validations = require('../middlewares/validationMdwr')

router.get('/', controller.index);
router.post('/', validations, controller.formulario)
router.get('/gracias', controller.gracias)
router.get('/borrar', controller.borrar)

module.exports = router