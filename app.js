// modulos requeridos
const express = require("express");
const app = express();

//motor de plantillas ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//agrego los require de las nuevas rutas
const routeMain = require("./routes/main.js");
const routeProducts = require("./routes/products.js");
const routeUsers = require("./routes/users.js");
const path = require("path");

//Inicialización de variables
const PORT = 4000; //puerto en el que el servidor escuchara

app.use(express.static("public")); // se decalra la carpeta public para servir archivos estaticos

app.use("/", routeMain);
app.use(routeUsers);
app.use(routeProducts);

//Se levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
