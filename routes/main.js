const express = require("express");
const router = express.Router();
const path = require("path");
const { title } = require("process");

router.get("/", (req, res) => {
  //*res.sendFile(path.resolve(__dirname, "../views/index.html"));
  res.render("Index", { title: "Index de la pagina" });
});
router.get("/home", (req, res) => {
  //*res.sendFile(path.resolve(__dirname, "../views/home.html"));
  res.render("home", { title: "Estas en la home" });
});
router.get("/nosotros", (req, res) => {
  //*res.sendFile(path.resolve(__dirname, "../views/nosotros.html"));
  res.render("Nosotros", { title: "Nosotros" });
});

module.exports = router;
