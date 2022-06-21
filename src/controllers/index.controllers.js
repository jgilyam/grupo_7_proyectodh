const path = require("path");
const fs = require("fs");
const productRecomen = require("../models/baseProducts");

//modulos propios
const extractRandom = require("../utils/extractRandom");

//lectura de archivo JSON
const basePath = path.resolve(__dirname, "../data/products_DATA.json");
const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));
const db = require("../../database/models");

const controllerPrincipal = {};

/* controllerPrincipal.index = (req, res) => {
  res.render("index");
}; */

controllerPrincipal.home = async (req, res) => {
  //let productsInSale = extractRandom(products, 4, "ofertas");
  //let productsTopSale = extractRandom(products, 4, "masVendido");
  const productsInSale = await db.Product.findAll(
    {
      where: {
        id_category: 3,
      },
    },
    {
      limit: 4,
    }
  );

  const productsTopSale = await db.Product.findAll(
    {
      where: {
        id_category: 2,
      },
    },
    {
      limit: 4,
    }
  );

  res.render("home", { productsTopSale, productsInSale });
};
controllerPrincipal.nosotros = (req, res) => {
  res.render("nosotros");
};

controllerPrincipal.search = (req, res) => {
  let keyword = req.query.keywords;
  const results = products.filter((product) => {
    return product.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
  });

  res.render("results", { results, keyword });
};

module.exports = controllerPrincipal;
