const express = require("express");
const router = express.Router();

router.get("/product-cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

router.get("/product-detail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

module.exports = router;
