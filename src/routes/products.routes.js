const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const productControllers = require("../controllers/products.controllers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = path.join(__dirname, "../../public/img");
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get("/carrito", productControllers.cart);

router.get("/detalle", productControllers.detail);

router.get("/administrador", productControllers.form);

///products (GET) Listado de productos
router.get("/", productControllers.index);

router.get("/:page", productControllers.page);

///products/create (GET) Formulario de creación de productos

///products/:id (GET) Detalle de un producto particular

//products (POST) Acción de creación (a donde se envía el formulario)

///products/:id/edit (GET) Formulario de edición de productos
router.get("/edit/:id", productControllers.edit);

///products/:id (PUT) Acción de edición (a donde se envía el formulario):
router.put("/edit/:id", upload.single("imagen"), productControllers.update);

///products/:id (DELETE) Acción de borrado

router.delete("/:id", productControllers.destroy);

module.exports = router;
