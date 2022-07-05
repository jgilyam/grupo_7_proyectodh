//vamos a requerir express-validator

const { body } = require("express-validator");
const MIN_LENGTH_DESCRIPTION = 20;
const MIN_LENGTH_MESSAGE_DESCRIPTION = `La descripción debe tener por lo menos ${MIN_LENGTH_DESCRIPTION} caracteres`;
const MIN_LENGTH_NAME = 5;
const MIN_LENGTH_MESSAGE_NAME = `La descripción debe tener por lo menos ${MIN_LENGTH_NAME} caracteres`;

const validationProduct = [
  body("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .isLength({ min: MIN_LENGTH_NAME })
    .withMessage(MIN_LENGTH_MESSAGE_NAME),
  body("description")
    .notEmpty()
    .withMessage("Descripcion requerida")
    .isLength({ min: MIN_LENGTH_DESCRIPTION })
    .withMessage(MIN_LENGTH_MESSAGE_DESCRIPTION),
];

module.exports = validationProduct;