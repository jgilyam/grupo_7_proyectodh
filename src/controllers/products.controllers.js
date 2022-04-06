const path = require("path");
const productRecomen = require("../models/baseProducts");
const productControllers = {};

productControllers.cart = (req, res) => {
  res.render("productCart");
};

productControllers.detail = (req, res) => {
  res.render("productDetail", {
    productRecomen: productRecomen,
  });
};

module.exports = productControllers;
