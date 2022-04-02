const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
router.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
router.get("/nosotros", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/nosotros.html"));
});

module.exports = router;
