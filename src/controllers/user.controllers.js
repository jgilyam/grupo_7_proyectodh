const path = require("path");
const fs = require("fs");

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
controllersUser.createUser = (req, res) => {
  let resultValidation = validationResult(req);
  console.log("body Result:", resultValidation);
  if (resultValidation.errors.length > 0) {
    return res.render("register", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
  let id = users[users.length - 1].id + 1;

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
  fs.writeFileSync(userFilePath, usersJSON);

  res.redirect("../home");
};

module.exports = controllersUser;
