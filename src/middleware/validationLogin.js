//vamos a requerir express-validator

const { check } = require("express-validator");

const validacionesLogin = [
  check("email")
    .notEmpty()
    .withMessage("Email requerido")
    .isEmail()
    .withMessage("Email invalido"),
  check("password").notEmpty().withMessage("Contraseña requerida"),
];

module.exports = validacionesLogin;
