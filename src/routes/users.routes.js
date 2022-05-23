const express = require("express");
const router = express.Router();
const controllersUser = require("../controllers/user.controllers");
const multer = require("multer");
const path = require("path");
const validations = require("../middleware/validationRegister");
const validacionesLogin = require("../middleware/validationLogin");
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

router.get("/register", controllersUser.register);

router.post(
  "/register",
  upload.single("image"),
  validations,
  controllersUser.createUser
);

router.get("/login", controllersUser.formLogin);

/*router.post("/login", controllersUser.login);*/

router.post("/login", validacionesLogin, controllersUser.proccessLogin);
router.get("/perfil",controllersUser.perfil)

router.get("/formconsultas", controllersUser.formconsultas);

router.get("/pregFrecuentes", controllersUser.preguntasFrecuentes);
router.get("/logout", controllersUser.logout);

module.exports = router;
