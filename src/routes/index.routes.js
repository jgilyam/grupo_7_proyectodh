const express = require("express");
const router = express.Router();
const controllerPrincipal = require("../controllers/index.controllers");

/* router.get("/", controllerPrincipal.index); */
router.get("/",controllerPrincipal.home);
router.get("/home",controllerPrincipal.home);
router.get("/nosotros",controllerPrincipal.nosotros);

module.exports = router;
