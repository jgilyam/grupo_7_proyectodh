const path = require("path");

const productControllers = {};

productControllers.cart = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/productCart.html"));
};

productControllers.detail = (req, res) => {
  res.render(path.resolve(__dirname, "../views/productDetail"));
};

module.exports = productControllers;
