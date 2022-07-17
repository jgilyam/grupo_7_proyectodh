const express = require("express");
const router = express.Router();
const userController = require("../../controllers/api/user.controllers");

router.get("/", userController.list);
router.get("/:id", userController.detail);
router.get("/imagen/:image", userController.imageUser);

module.exports = router;
