const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

router.get("/formconsultas", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/formconsultas.html"));
});

router.get("/preguntas-frecuentes", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/pregFrecuentes.html"));
});

module.exports = router;
