const express = require("express");
const router = express.Router();
const typeController = require("../../controllers/api/types.controllers");

//Rutas
//Listado de todos los generos
router.get("/", typeController.list);
//Detalle del genero
router.get("/:id", typeController.detail);

module.exports = router;
