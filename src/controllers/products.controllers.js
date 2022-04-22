//modulos nativos
const path = require("path");
const fs = require("fs");

//modulos de terceros

//modulos propios
const productRecomen = require("../models/baseProducts");
const extractRandom = require("../utils/extractRandom");

//controloador a exportar
const productControllers = {};

//manejo de archivos para levantar base JSON
const basePath = path.resolve(__dirname, "../data/products_DATA.json");

productControllers.cart = (req, res) => {
  res.render("productCart");
};

productControllers.detail = (req, res) => {
  res.render("productDetail", {
    productRecomen: productRecomen,
  });
};

productControllers.form = (req, res) => {
  res.render("productForm");
};
//index, productos separados en 3 secciones, nuevo, ofertas, masVendido
productControllers.index = (req, res) => {
  //lectura de base de datos JSON
  const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));
  //generación de 3 arrays separados en categorias.
  let productsNew = extractRandom(products, 4, "nuevo");
  let productsInSale = extractRandom(products, 4, "ofertas");
  let productsTopSale = extractRandom(products, 4, "masVendido");

  res.render("products", { productsNew, productsInSale, productsTopSale });
};
module.exports = productControllers;
