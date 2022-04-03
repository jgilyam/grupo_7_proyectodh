const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/register", (req, res) => {
  //* res.sendFile(path.resolve(__dirname, "../views/register.html"));
  res.render("register");
});

router.get("/login", (req, res) => {
  //*res.sendFile(path.resolve(__dirname, "../views/login.html"));
  res.render("login");
});

router.get("/formconsultas", (req, res) => {
  //* res.sendFile(path.resolve(__dirname, "../views/formconsultas.html"));
  res.render("formconsultas");
});

router.get("/preguntas-frecuentes", (req, res) => {
  //* res.sendFile(path.resolve(__dirname, "../views/pregFrecuentes.html"));
  res.render("pregFrecuentes");
});

module.exports = router;
