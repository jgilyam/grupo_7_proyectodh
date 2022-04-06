const path = require("path");
const productRecomen = require("./baseProducts");

const controllerPrincipal = {};

controllerPrincipal.index = (req, res) => {
  res.render("index")
};

controllerPrincipal.home = (req, res) => {
  res.render("home")/* , {
    productRecomen: productRecomen,
  }; */
};
controllerPrincipal.nosotros = (req, res) => {
  res.render("nosotros")
};

module.exports = controllerPrincipal;
