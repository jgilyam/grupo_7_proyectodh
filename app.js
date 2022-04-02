// modulos requeridos
const express = require("express");
const app = express();
const path = require("path");

//agrego los require de las nuevas rutas
const routeMain = require("./routes/main.js");
const routeProducts = require("./routes/products.js");
const routeUsers = require("./routes/users.js");

//Inicialización de variables
const PORT = 4000; //puerto en el que el servidor escuchara

app.use(express.static("public")); // se decalra la carpeta public para servir archivos estaticos

app.use("/", routeMain);
// agrego use
app.use("/register", routeUsers);
app.use("/login", routeUsers);
app.use("/formconsultas", routeUsers);
app.use("/preguntas-frecuentes", routeUsers);
app.use("/product-cart", routeProducts);
app.use("/product-detai;", routeProducts);

//Se levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
