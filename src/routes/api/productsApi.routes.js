const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApi.controllers");

router.get("/", productsApiController.list);
// router.get("/:id", productsApiController);

module.exports = router;
