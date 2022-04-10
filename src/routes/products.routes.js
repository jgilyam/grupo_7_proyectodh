const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/products.controllers")

router.get("/product-cart",productControllers.cart) 

router.get("/product-detail", productControllers.detail)

router.get("/product-form", productControllers.form)

module.exports = router;
