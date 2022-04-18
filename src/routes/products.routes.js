const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/products.controllers");

router.get("/carrito", productControllers.cart);

router.get("/detalle", productControllers.detail);

router.get("/administrador", productControllers.form);

module.exports = router;
