const path = require("path");

const controllersUser = {};

controllersUser.login = (req, res) => {
  res.render(path.resolve(__dirname, "../views/login.ejs"));
};

controllersUser.register = (req, res) => {
  res.render(path.resolve(__dirname, "../views/register.ejs"));
};

controllersUser.formconsultas = (req, res) => {
  res.render(path.resolve(__dirname, "../views/formconsultas.ejs"));
};

controllersUser.preguntasFrecuentes = (req, res) => {
  res.render(path.resolve(__dirname, "../views/pregFrecuentes.ejs"));
};

module.exports = controllersUser;
