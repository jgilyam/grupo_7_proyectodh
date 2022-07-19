const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApi.controllers");

router.get("/", productsApiController.list);
router.get("/:id", productsApiController.detail);
router.get("/imagen/:imagen", productsApiController.imageProduct);

module.exports = router;
