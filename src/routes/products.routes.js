const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/products.controllers");

router.get("/carrito", productControllers.cart);

router.get("/detalle", productControllers.detail);

router.get("/administrador", productControllers.form);

///products (GET) Listado de productos
router.get("/", productControllers.index);

///products/create (GET) Formulario de creación de productos

///products/:id (GET) Detalle de un producto particular

//products (POST) Acción de creación (a donde se envía el formulario)

///products/:id/edit (GET) Formulario de edición de productos

///products/:id (PUT) Acción de edición (a donde se envía el formulario):

///products/:id (DELETE) Acción de borrado

module.exports = router;
