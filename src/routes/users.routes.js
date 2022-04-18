const express = require("express");
const router = express.Router();
const controllersUser = require("../controllers/user.controllers");

router.get("/register", controllersUser.register);

router.get("/login", controllersUser.login);

router.get("/formconsultas", controllersUser.formconsultas);

router.get("/pregFrecuentes", controllersUser.preguntasFrecuentes);

module.exports = router;
