// modulos requeridos
const express = require("express");
const app = express();
const path = require("path");

//motor de plantillas ejs
app.set("view engine", "ejs")
app.set("views", path.join(__dirname , "/views"));

//agrego los require de las nuevas rutas
const routeMain = require("../src/routes/index.routes");
const routeProducts = require("../src/routes/products.routes");
const routeUsers = require("../src/routes/users.routes");

//Inicialización de variables
const PORT = 4000; //puerto en el que el servidor escuchara

app.use(express.static(path.resolve(__dirname, "../public"))); // se decalra la carpeta public para servir archivos estaticos

// agrego routes
app.use("/",routeMain);
app.use("/",routeProducts);
app.use("/",routeUsers);

//Se levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
