const path = require("path");

const controllersUser = {};

controllersUser.login = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/login.html"));
};

controllersUser.register = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/register.html"));
};

controllersUser.formconsultas = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/formconsultas.html"));
};

controllersUser.preguntasFrecuentes = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/pregFrecuentes.html"));
};

module.exports = controllersUser;
