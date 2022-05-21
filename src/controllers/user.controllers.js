const path = require("path");
const fs = require("fs");

//RUTA DE ARCHIVO JSON-USER
const userFilePath = path.join(__dirname, "../data/users.json");
//PASANDO ARCHIVO JSON-USER A ARRAY
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
//requiero user
const user = require("../models/user.js");

//requiero bcryptjs pra cuando el proceso de login lo necesite
const bcryptjs = require("bcryptjs");

//requiero express-validator
const { validationResult, body } = require("express-validator");

//Tiempo de expiración de cookie
const TIEMPO_COKKIE = 60000;

const controllersUser = {};

controllersUser.login = (req, res) => {
  const mail = "juan@gmial.com"; // Variable que luego debe se reemplazada por el mail del usiario que se loogueo.

  //Maga, para indicar que el usuario se logueo usar esta variable en session "usuarioLogueado", si le pones otro nombre avisame para cambiar algo en el middleware ed la cookie

  //se setea la cookie
  if (req.body.recordar != undefined) {
    res.cookie("recordame", mail, { maxAge: TIEMPO_COKKIE });
  }
  res.redirect("/home");
};

controllersUser.formLogin = (req, res) => {
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
controllersUser.createUser = (req, res) => {
  //proceso de registro de usuario
  let resultValidation = validationResult(req);
  if (resultValidation.errors.length > 0) {
    return res.render("register", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }

  user.create(req.body, req.file);

  /*  return res.send ("se guardo el usuario") */
  return res.redirect("../home");
};

module.exports = controllersUser;

//realizado por Jose
/* let id = users[users.length - 1].id + 1;

let image = "default-image.png";

if (req.file) {
  image = req.file.filename;
}

let createUser = {
  id,
  ...req.body,
  image,
};

const usersData = fs.readFileSync(userFilePath, "utf-8");
let user;
if (usersData == "") {
  user = [];
} else {
  user = JSON.parse(usersData);
}
user.push(createUser);
usersJSON = JSON.stringify(user);
fs.writeFileSync(userFilePath, usersJSON); */
