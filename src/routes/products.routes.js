//modulos nativos
const path = require("path");

//modulos de terceros
const express = require("express");
const router = express.Router();
const multer = require("multer");

//modulos propios
const productControllers = require("../controllers/products.controllers");
const validationProduct = require("../middleware/validationProduct");
const validationExtensionFile = require("../middleware/validationExtensionFIle");

//------------configuración de multer
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
//------------configuración de multer

router.get("/carrito", productControllers.cart);

///products (GET) Listado de productos
router.get("/", productControllers.index);

///products/create (GET) Formulario de creación de productos
router.get("/create", productControllers.form);

///products/:id (GET) Detalle de un producto particular
router.get("/:id", productControllers.detail);

//products (POST) Acción de creación (a donde se envía el formulario)
router.post(
  "/",
  upload.single("image"),
  validationExtensionFile,
  validationProduct,
  productControllers.store
);

///products/:id/edit (GET) Formulario de edición de productos
router.get("/edit/:id", productControllers.edit);

///products/:id (PUT) Acción de edición (a donde se envía el formulario):
router.put(
  "/edit/:id",
  upload.single("imagen"),
  validationExtensionFile,
  validationProduct,
  productControllers.update
);

///products/:id (DELETE) Acción de borrado
router.delete("/:id", productControllers.destroy);

module.exports = router;
