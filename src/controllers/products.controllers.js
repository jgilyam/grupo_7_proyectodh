//modulos nativos
const path = require("path");
const fs = require("fs");

//modulos de terceros

//modulos propios
const productRecomen = require("../models/baseProducts");
const extractRandom = require("../utils/extractRandom");
const paginar = require("../utils/paginar");

//base de datos JSON
const productosJson = path.join(__dirname, "../data/products_DATA");

//base de datos sequelize
const db = require("../../database/models");
//controloador a exportar
const productControllers = {};

//manejo de archivos para levantar base JSON
const basePath = path.resolve(__dirname, "../data/products_DATA.json");

const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));

productControllers.cart = (req, res) => {
  res.render("productCart");
};
//conotrolador que se encarga de mostrar el producto elegido por id en detalle
productControllers.detail = (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === Number(productId));

  let productsInSale = extractRandom(products, 4, "ofertas");
  res.render("productDetail", { product, productsInSale });
};

productControllers.form = (req, res) => {
  res.render("productForm");
};
//index, productos separados en 3 secciones, nuevo, ofertas, masVendido
productControllers.index = async (req, res) => {
  //lectura de base de datos JSON
  //const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));
  const products = await db.Product.findAll();
  res.render("products", { products });
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
// CREAT
productControllers.store = (req, res) => {
  let id = products[products.length - 1].id + 1;
  let image = "default-image.png";
  if (req.file) {
    image = req.file.filename;
  }

  let newProduct = {
    id,
    ...req.body,
    image,
  };
  products.push(newProduct);
  fs.writeFileSync(basePath, JSON.stringify(products));
  res.redirect("producto");
};

// GET-EDIT

productControllers.edit = (req, res) => {
  const productId = req.params.id;
  const productToEdit = products.find((p) => p.id === Number(productId));

  res.render("product-edit-form", { productToEdit });
};

productControllers.update = (req, res) => {
  const productId = Number(req.params.id);
  let productToEdit = products.find((p) => p.id === productId);

  let image = productToEdit.image;
  if (req.file) {
    image = req.file.filename;
  }
  productToEdit = {
    id: productId,
    ...req.body,
    image,
  };
  const updateProducts = products.map((p) => {
    if (p.id === productToEdit.id) {
      return (p = { ...productToEdit });
    }
    return p;
  });
  fs.writeFileSync(basePath, JSON.stringify(updateProducts), "utf-8");
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
