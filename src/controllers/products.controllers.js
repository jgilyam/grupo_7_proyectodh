const path = require("path");
const productRecomen = require("./baseProducts");
const productControllers = {};

productControllers.cart = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/productCart.html"));
};

productControllers.detail = (req, res) => {
  res.render(path.resolve(__dirname, "../views/productDetail"), {
    productRecomen: productRecomen,
  });
};

module.exports = productControllers;
