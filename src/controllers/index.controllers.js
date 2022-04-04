const path = require("path");

const controllerPrincipal = {};

controllerPrincipal.index = (req, res) => {
  res.render(path.resolve(__dirname, "../views/index"));
};

controllerPrincipal.home = (req, res) => {
  res.render(path.resolve(__dirname, "../views/home"));
};
controllerPrincipal.nosotros = (req, res) => {
  res.render(path.resolve(__dirname, "../views/nosotros"));
};

module.exports = controllerPrincipal;
