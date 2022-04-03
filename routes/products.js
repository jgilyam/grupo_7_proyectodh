const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/product-cart", (req, res) => {
  //* res.sendFile(path.resolve(__dirname, "../views/productCart.html"));
  res.render("productCart");
});

router.get("/product-detail", (req, res) => {
  //* res.sendFile(path.resolve(__dirname, "../views/productDetail.html"));
  res.render("productDetail");
});

module.exports = router;
