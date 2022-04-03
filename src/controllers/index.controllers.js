const path = require("path");

const controllerPrincipal = {};

controllerPrincipal.index = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/index.html"));
};

controllerPrincipal.home = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/home.html"));
};
controllerPrincipal.nosotros = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/nosotros.html"));
};

module.exports = controllerPrincipal;
