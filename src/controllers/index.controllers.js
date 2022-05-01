const path = require("path");
const fs = require("fs");
const productRecomen = require("../models/baseProducts");

//modulos propios
const extractRandom = require("../utils/extractRandom");

//lectura de archivo JSON
const basePath = path.resolve(__dirname, "../data/products_DATA.json");
const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));

const controllerPrincipal = {};

/* controllerPrincipal.index = (req, res) => {
  res.render("index");
}; */

controllerPrincipal.home = (req, res) => {
  let productsInSale = extractRandom(products, 4, "ofertas");
  let productsTopSale = extractRandom(products, 4, "masVendido");
  res.render("home", { productsTopSale, productsInSale });
};
controllerPrincipal.nosotros = (req, res) => {
  res.render("nosotros");
};

module.exports = controllerPrincipal;
