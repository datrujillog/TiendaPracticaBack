const { body, validationResult, check, oneOf } = require('express-validator');
const { validarCampos } = require('./validarCamposMiddlewar');

// const {emailExiste} = require('../helpers/db-validatiors');
// const { sanitizeBody } = require('express-validator');
 

const validarCamposRegistro = [
    check('email').isEmail().withMessage('El email no es valido'),

    

    validarCampos


]
console.log(validarCamposRegistro);

module.exports = {
    validarCamposRegistro
}