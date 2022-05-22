

//vamos a requerir express-validator

const { check } = require("express-validator");

const validacionesLogin = [
  check("email").isEmail().withMessage("Email invalido"),
  check("password").notEmpty().withMessage("Contraseña invalida"),
];

module.exports = validacionesLogin;
