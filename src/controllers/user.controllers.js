const path = require("path");
const fs = require("fs");

const user = require("../models/user.js");

//RUTA DE ARCHIVO JSON-USER
const userFilePath = path.join(__dirname, "../data/users.json");
//PASANDO ARCHIVO JSON-USER A ARRAY
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

//requiero express-validator
const { validationResult, body } = require("express-validator");

const controllersUser = {};

controllersUser.login = (req, res) => {
  res.render("login");
};

controllersUser.register = (req, res) => {
  res.render("register");
};

controllersUser.formconsultas = (req, res) => {
  res.render("formconsultas");
};

controllersUser.preguntasFrecuentes = (req, res) => {
  res.render("pregFrecuentes");
};
controllersUser.processRegister = (req, res) => {
  let resultValidation = validationResult(req);
  if (resultValidation.errors.length > 0) {
    return res.render("register", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
    return res.send("Perfil creado con exito!");
  }
  user.create(req.body, req.file);
};

module.exports = controllersUser;
