const { body } = require('express-validator');
const path = require('path');
const validations = [
        body('name').notEmpty({ ignore_whitespace:true }).withMessage('Debes ingresar tu nombre'),
        body('email').notEmpty().withMessage('Debes ingresar un correo electronico').bail()
        .isEmail().withMessage('Ingresa un formato de email correcto').bail()
        .normalizeEmail(),
        body('colors').notEmpty().withMessage('Elige un color'),
        body('age').notEmpty({ ignore_whitespace:false }).withMessage('Debes ingresar tu edad').bail()
        .isDecimal({ ignore_whitespace:true }).withMessage('Debes ingresar un número').bail(),
];

module.exports = validations


function validation (req, res, next) {


    next();
}