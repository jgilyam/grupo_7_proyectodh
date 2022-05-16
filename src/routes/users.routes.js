const express = require("express");
const router = express.Router();
const controllersUser = require("../controllers/user.controllers");
const multer = require("multer");
const path = require("path");

//requiero express-validator
const { body } = require("express-validator");

//CONFIGURACION DE MULTER PARA REGISTER USER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folderr = path.join(__dirname, "../../public/img/users");
    cb(null, folderr);
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

//* VALIDACIONES
const validations = [
  body("first_name").notEmpty().withMessage("Debe escribir el nombre"),
  body("last_name").notEmpty().withMessage("Debe escribir el apellido"),
  body("image").notEmpty().withMessage("Debe subir una imagen"),
  body("email").notEmpty().withMessage("Debe escribir su email"),
  body("contraseña").notEmpty().withMessage("Debe escirbir su contrasena"),
];

router.get("/register", controllersUser.register);

router.post(
  "/register",
  upload.single("image"),
  validations,
  controllersUser.createUser
);

router.get("/login", controllersUser.login);

router.get("/formconsultas", controllersUser.formconsultas);

router.get("/pregFrecuentes", controllersUser.preguntasFrecuentes);

module.exports = router;
