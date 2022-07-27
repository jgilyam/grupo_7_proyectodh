const express = require("express");
const router = express.Router();
const controllerPrincipal = require("../controllers/index.controllers");

/* router.get("/", controllerPrincipal.index); */
router.get("/", controllerPrincipal.home);
router.get("/search", controllerPrincipal.search);
router.get("/home", controllerPrincipal.home);
router.get("/nosotros", controllerPrincipal.nosotros);
router.get("/not-found", controllerPrincipal.notFound);
module.exports = router;
