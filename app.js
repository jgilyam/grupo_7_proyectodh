// modulos requeridos
const express = require("express");
const app = express();
const path = require("path");

//Inicialización de variables
const PORT = 4000; //puerto en el que el servidor escuchara

app.use(express.static("public")); // se decalra la carpeta public para servir archivos estaticos

//Rutas
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

//Rutas nuevas
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/product-cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

app.get("/product-detail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

app.get("/formconsultas", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/formconsultas.html"));
});

app.get("/nosotros", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/nosotros.html"));
});

app.get("/preguntas-frecuentes", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/pregFrecuentes.html"));
});
//Se levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
