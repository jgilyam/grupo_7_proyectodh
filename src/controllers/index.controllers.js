const path = require("path");
const productRecomen = require("./baseProducts");

const controllerPrincipal = {};

controllerPrincipal.index = (req, res) => {
  res.render(path.resolve(__dirname, "../views/index"));
};

controllerPrincipal.home = (req, res) => {
  res.render(path.resolve(__dirname, "../views/home"), {
    productRecomen: productRecomen,
  });
};
controllerPrincipal.nosotros = (req, res) => {
  res.render(path.resolve(__dirname, "../views/nosotros"));
};

module.exports = controllerPrincipal;
