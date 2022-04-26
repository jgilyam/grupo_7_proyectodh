//modulos nativos
const path = require("path");
const fs = require("fs");

//modulos de terceros

//modulos propios
const productRecomen = require("../models/baseProducts");
const extractRandom = require("../utils/extractRandom");
const paginar = require("../utils/paginar");
const productosJson = path.join(__dirname, "../data/products_DATA");
//controloador a exportar
const productControllers = {};

//manejo de archivos para levantar base JSON
const basePath = path.resolve(__dirname, "../data/products_DATA.json");

const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));

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
  //

  //generación de 3 arrays separados en categorias.
  let productsNew = extractRandom(products, 12, "nuevo");
  let productsInSale = extractRandom(products, 12, "ofertas");
  let productsTopSale = extractRandom(products, 12, "masVendido");

  res.render("products", { productsNew, productsInSale, productsTopSale });
};

productControllers.page = (req, res) => {
  const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));
  let page = Number(req.params.page);
  let pages = [];
  for (let index = page; index < page + 10; index++) {
    pages.push(index);
  }

  let productsNew = paginar(products, 4, page, "nuevo");
  let productsInSale = paginar(products, 4, page, "ofertas");
  let productsTopSale = paginar(products, 4, page, "masVendido");
  res.render("products", {
    productsNew,
    productsInSale,
    productsTopSale,
    pages,
  });
};

// GET-EDIT

productControllers.edit = (req, res) => {
  const productId = req.params.id;
  const productToEdit = products.find((p) => p.id === Number(productId));

  res.render("product-edit-form", { productToEdit });
};

productControllers.update = (req, res) => {
  let productoss = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/products_DATA.json"))
  );
  req.body.id = req.params.id;
  req.body.imagen = req.file ? req.file.name : req.body.oldImagen;
  let productosUpdate = productoss.map((p) => {
    if (p.id == req.body.id) {
      return (p = req.body);
    }
    return p;
  });
  let productosActualizar = JSON.stringify(productosUpdate, null, 2);
  fs.writeFileSync(
    path.resolve(__dirname, "../data/products_DATA.json"),
    productosActualizar
  );
  res.redirect("/home");
};

// ELIMINAR
productControllers.destroy = (req, res) => {
  const productAeliminar = req.params.id;
  const finalProducts = products.filter((p) => p.id != productAeliminar);

  fs.writeFileSync(basePath, JSON.stringify(finalProducts), "utf-8");
  res.redirect("/");
};
module.exports = productControllers;
